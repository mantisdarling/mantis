from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Expert(BaseModel):
    id: str
    skills: List[str]

class MatchRequest(BaseModel):
    learner_skills: List[str]
    experts: List[Expert]

@app.get("/")
def read_root():
    return {"message": "MANTIS Recommender Service is running!"}

@app.post("/recommend")
def recommend_experts(req: MatchRequest):
    # Simple heuristic: count matching skills
    learner_set = set([s.lower() for s in req.learner_skills])
    
    scored_experts = []
    for expert in req.experts:
        expert_set = set([s.lower() for s in expert.skills])
        score = len(learner_set.intersection(expert_set))
        scored_experts.append({
            "id": expert.id,
            "score": score
        })
        
    # Sort by score descending
    scored_experts.sort(key=lambda x: x["score"], reverse=True)
    return {"ranked_experts": scored_experts}
