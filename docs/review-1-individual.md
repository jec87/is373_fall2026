# Review 1 – Plan – Individual Portfolio + Individual RAG App

**Student:** Jiyeon Choi  
**Course:** IS373  
**Date:** November 17, 2026  
**Stage:** Plan

## 1. Portfolio + career research

### Existing portfolio

- Production: https://jiyeonchoi.xyz
- QA: https://qa.jiyeonchoi.xyz
- Repository: https://github.com/jec87/is373_fall2026

My portfolio is already hosted using Docker and DigitalOcean. It includes a homepage, About page, work examples, and different design themes.

### Career research

I am exploring two career directions: UX/UI Designer and Front-End Developer.

I want to compare these careers based on their responsibilities, technical skills, and portfolio expectations.

**Original employer postings:** To be added after reviewing three real job advertisements.

### Target audience and portfolio evidence

My proposed target audience is employers hiring for UX/UI and related digital design roles.

I plan to feature projects that demonstrate user research, interface design, problem-solving, and technical skills. I will distinguish completed work from sample projects.

### Portfolio layout comparison

**Option A: Minimal portfolio**

A simple homepage, About page, and project gallery. This makes it easy for employers to find my work.

**Option B: Visual portfolio**

A more creative layout with larger images, animations, and interactive elements.

**Current decision:** I prefer Option A because employers should be able to find my work quickly.

### Checks and next steps

**Existing documented checks:**
- QA and production deployments were verified on October 15, 2026.
- Production returned HTTP 200 over HTTPS.
- Docker health checks passed.

**Planned checks:**
- Review three original employer job postings.
- Compare the two career directions using employer requirements.
- Ask a peer whether my target audience and featured projects match those requirements.
- Test the portfolio layout on desktop and mobile.

## 2. RAG app + technical research

### Proposed application

I plan to create a RAG application that helps students find answers from permitted course documentation.

The application would retrieve relevant passages and generate answers supported by those sources.

This is a proposal, not a completed application.

### Technical research

**Retrieval-Augmented Generation (RAG):** RAG retrieves relevant information before generating an answer. This can help ground responses in source documents.

**Vector database:** Stores embeddings that can be searched by semantic similarity.

**Graph database:** Represents entities and relationships, which can help answer questions about how concepts connect.

**Chunking:** Divides documents into smaller sections for retrieval.

**Embeddings:** Convert text into numerical representations for similarity search.

**Entities and relationships:** Identify important concepts and how they connect.

**Import:** Load permitted source documents, preserve source metadata, divide them into chunks, and prepare them for retrieval.

### Database comparison

**Option A: Vector retrieval**

Useful for finding passages that are semantically similar to a student's question.

**Option B: Graph retrieval**

Useful for following explicit relationships among courses, assignments, requirements, and other entities.

**Current decision:** I propose starting with vector retrieval because the initial application focuses on finding relevant text passages. A graph database may be considered later if relationship-based questions require it.

### Proposed architecture

Permitted source documents → text extraction → chunking → embeddings → vector index → retrieval → answer generation with source citations.

Each indexed passage should retain its original document title, source URL, and access date.

### Source permissions

I will identify course documents that can be used for this project and verify their permissions before importing them.

Restricted course content will not be published in a public repository without permission.

### Evaluation questions

1. Can the application find the correct assignment deadline?
2. Can it identify the required submission format?
3. Can it distinguish between Plan and Build requirements?
4. Does it provide evidence from the correct source?
5. Does it acknowledge when the available sources do not contain an answer?

### Hosting and resource constraints

I plan to evaluate a lightweight application that can run locally before deployment.

I will consider storage, memory, embedding costs, retrieval performance, and whether the existing DigitalOcean server has enough resources.

### Planned checks

- Import one permitted source and confirm its metadata is preserved.
- Retrieve a relevant passage for a test question.
- Check whether the answer accurately reflects the passage.
- Test a question with missing evidence.
- Check whether the application displays the correct source citation.

### Current status

The architecture and evaluation questions are planned. No RAG retrieval or answer-generation tests have been executed yet.

### Next steps

Research specific vector and graph database tools, compare their resource requirements, confirm permitted sources, implement a small prototype, and record actual test results.

## Review summary

**Completed previously:** Portfolio deployment, CI/CD workflows, server security verification, and documented hosting checks.

**Proposed:** Career direction, portfolio layout choice, and RAG architecture.

**Still needed:** Original employer postings, technical research sources, tool comparison, peer feedback, and RAG evaluation evidence.
