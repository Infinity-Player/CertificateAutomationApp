from fastapi import FastAPI

app = FastAPI()

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

@app.get("/api/certificates")
def get_certificates():
    return [{"id": 1, "name": "Test Certificate"}]

@app.get("/api/pdf-splits")
def get_pdf_splits():
    return [{"file": "demo.pdf", "pages": 12}]

@app.get("/api/whatsapp/status")
def whatsapp_status():
    return {"queued": 5, "sent": 10}

@app.get("/api/logs")
def logs():
    return [{"event": "Certificate generated", "status": "success"}]
