from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from pydantic import BaseModel

class ChatMessage(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"message": "Hello from the Python backend!"}

@app.post("/api/chat")
async def chat_endpoint(chat_message: ChatMessage):
    """
    This endpoint receives a message from the frontend,
    and is intended to pass it to a generative AI model.
    """
    user_message = chat_message.message

    # --- AI Integration Placeholder ---
    # Here you would integrate with the Gemini API
    # 1. Configure the Gemini client with your API key
    #    (preferably loaded from an environment variable)
    #
    # import google.generativeai as genai
    # genai.configure(api_key="YOUR_GEMINI_API_KEY")
    # model = genai.GenerativeModel('gemini-pro')
    # response = model.generate_content(user_message)
    # ai_response = response.text

    # For now, we'll just use a mocked response.
    ai_response = f"AI Mock Response: You sent the message: '{user_message}'"

    return {"sender": "ai", "text": ai_response}
