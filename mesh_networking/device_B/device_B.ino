#include "painlessMesh.h"
//#include <TaskScheduler.h>
#include <Arduino.h>

#define MESH_PREFIX     "yourMeshNetwork"
#define MESH_PASSWORD   "yourMeshPassword"
#define MESH_PORT       5555

Scheduler userScheduler;  // To control your personal task
painlessMesh mesh;

// User stub
void sendMessage(); // Prototype, forward declaration

Task taskSendMessage(2000, TASK_FOREVER, &sendMessage);

void sendMessage() {
  String msg = "Hello from B";
  mesh.sendBroadcast(msg);
  Serial.printf("Sent message: %s\n", msg.c_str());
}

void receivedCallback(uint32_t from, String &msg) {
  Serial.printf("Received message from %u msg=%s\n", from, msg.c_str());
}

void setup() {
  Serial.begin(115200);

  mesh.setDebugMsgTypes(ERROR | STARTUP | CONNECTION);
  mesh.init(MESH_PREFIX, MESH_PASSWORD, MESH_PORT);
  mesh.onReceive(&receivedCallback);

  userScheduler.addTask(taskSendMessage);
  taskSendMessage.enable();
}

void loop() {
  mesh.update();
  userScheduler.execute();
}
