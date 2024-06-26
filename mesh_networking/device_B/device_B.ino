#include <painlessMesh.h>

#define   MESH_PREFIX     "yourMeshNetwork"
#define   MESH_PASSWORD   "yourMeshPassword"
#define   MESH_PORT       5555

Scheduler userScheduler; // to control your personal task
painlessMesh  mesh;

void sendMessage() ; // Prototype so PlatformIO doesn't complain

Task taskSendMessage(TASK_SECOND * 1, TASK_FOREVER, &sendMessage);

void sendMessage() {
  String msg = "Hello from device 2!";
  mesh.sendBroadcast(msg);
  taskSendMessage.setInterval(TASK_SECOND * 10);
}

void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("Received from %u msg=%s\n", from, msg.c_str());
}

void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
  Serial.printf("--> startHere: New Connection, %s\n", mesh.subConnectionJson(true).c_str());
}

void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}

void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(), offset);
}

void setup() {
  Serial.begin(115200);

  mesh.setDebugMsgTypes(ERROR | STARTUP | CONNECTION);  // set before init() so that you can see startup messages

  mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
  mesh.onReceive(&receivedCallback);
  mesh.onNewConnection(&newConnectionCallback);
  mesh.onChangedConnections(&changedConnectionCallback);
  mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);

  userScheduler.addTask(taskSendMessage);
  taskSendMessage.enable();
}

void loop() {
  mesh.update();
}