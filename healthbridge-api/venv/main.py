from fastapi import FastAPI

app = FastAPI(title="HealthBridge API")

@app.get("/")
def read_root():
    return {
        "message": "Welcome to HealthBridge API",
        "status": "Online",
        "version": "1.0.0"
    }