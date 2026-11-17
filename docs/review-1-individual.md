# Review 1 – Plan – Individual Portfolio + Individual RAG App

**Student:** Jiyeon Choi  
**Course:** IS373  
**Date:** November 17, 2026  
**Stage:** Plan

## 1. Portfolio + career research

### Existing Portfolio

Production: https://jiyeonchoi.xyz  
QA: https://qa.jiyeonchoi.xyz  
GitHub: https://github.com/jec87/is373_fall2026

My portfolio is already hosted using Docker and DigitalOcean. It includes a homepage, About page, work examples, and different design themes.

### Career Research – Three Employer Postings

**Source 1: Palantir Technologies – Product Designer, New Grad**

https://jobs.lever.co/palantir/4c0fb3a1-8256-4d14-9a27-23727235752e

This position focuses on interaction design, visual design, user research, and Figma. Designers collaborate with developers and product managers.

**Source 2: CaseGuard – UI/UX Designer**

https://job-boards.greenhouse.io/caseguard/jobs/5362528008

This position emphasizes wireframes, prototypes, user flows, research, and testing. It also emphasizes a strong online portfolio.

**Source 3: New Jersey Innovation Authority – Senior Product Designer**

https://jobs.lever.co/NJStateOfficeofInnovation/8e03a679-9488-4d52-9f6f-ad33a4b431c6/

This position focuses on human-centered design, user interviews, usability testing, journey maps, and Figma. This is a senior position, so I am using it to understand long-term career expectations.

These are employer sources selected for research. I will confirm their current availability and requirements before using them for future applications.

### Career Comparison

**Option A: UX/UI Designer**

UX/UI designers focus on understanding users, conducting research, creating wireframes, developing prototypes, and improving digital experiences.

**Option B: Front-End Developer**

Front-end developers focus on implementing interfaces using HTML, CSS, JavaScript, and other web technologies.

Both careers involve creating digital products. UX/UI design focuses more on research and design decisions, while front-end development focuses more on implementation.

### My Career Decision

I chose UX/UI Designer because I enjoy combining creativity, technology, and user research. My Digital Design and HCI coursework connects to this career.

The employer postings show that research, prototyping, visual design, and communication are important skills.

### Target Reader and Portfolio Evidence

My target reader is a hiring manager looking for a junior UX/UI designer.

I plan to feature:

- **Netflix user research project:** Demonstrates interviews, user needs, and research findings.
- **Digital Closet project:** Demonstrates interface planning and visual organization.
- **Portfolio website:** Demonstrates digital design, development, and technical implementation.

I will clearly label completed projects and work that is still in progress.

### Portfolio Layout Comparison

**Option A: Minimal portfolio**

A simple homepage, About page, and project gallery. Employers can quickly find relevant work.

**Option B: Visual portfolio**

A creative layout with large images, animations, and interactive elements.

**My decision:** I prefer Option A because it makes my projects easier to navigate and understand.

### Existing Checks and Evidence

My portfolio already has a working deployment setup.

**Previously verified on October 15, 2026:**

- QA and production deployments completed successfully.
- Docker containers passed health checks.
- Production returned HTTP 200 over HTTPS.
- SSH password authentication and root login were disabled.
- GitHub Actions workflows completed successfully.

**Evidence:**

GitHub Actions: https://github.com/jec87/is373_fall2026/actions

QA deployment: https://github.com/jec87/is373_fall2026/actions/runs/38762594547

Production deployment: https://github.com/jec87/is373_fall2026/actions/runs/38767834062

These are previous deployment checks, not new usability tests.

### Portfolio Next Steps

1. Add detailed UX/UI case studies.
2. Improve project descriptions and visuals.
3. Check desktop and mobile layouts.
4. Ask a peer whether my featured projects match employer expectations.
5. Record the feedback and any resulting changes.

## 2. RAG app + technical research

### Proposed Application

I plan to create a Student Course Information Assistant using Retrieval-Augmented Generation (RAG).

The application would help students find answers about assignments, deadlines, and course requirements from permitted documents.

This is a proposed application, not a completed system.

### Technical Research

**Retrieval-Augmented Generation (RAG):** Retrieves relevant information before generating an answer, helping ground responses in source documents.

**Vector database:** Stores embeddings and supports similarity searches.

**Graph database:** Stores entities and relationships to help answer questions about connected information.

**Chunking:** Divides documents into smaller sections for retrieval.

**Embeddings:** Convert text into numerical representations that can be compared for similarity.

**Entities and relationships:** Represent concepts such as courses, assignments, deadlines, and their connections.

**Import:** Extracts permitted documents, preserves metadata, and prepares content for indexing.

### Database Comparison

**Option A: Vector retrieval**

Vector retrieval finds passages that are semantically similar to a user's question.

**Option B: Graph retrieval**

Graph retrieval follows relationships between entities, such as courses, assignments, and requirements.

**My decision:** I plan to start with vector retrieval because the application mainly needs to find relevant passages from documents.

### Technical Tool Comparison and Research Sources

**Option 1: Chroma**

Chroma is an open-source vector database used for AI applications. It stores embeddings and supports similarity searches.

Source: https://docs.trychroma.com/

**Option 2: PostgreSQL with pgvector**

pgvector adds vector similarity search to PostgreSQL. It can store document metadata and embeddings in one database.

Source: https://github.com/pgvector/pgvector

**Option 3: Neo4j**

Neo4j is a graph database that stores nodes and relationships. It could connect courses, assignments, and related requirements.

Source: https://neo4j.com/docs/

### My Technical Decision

I plan to use Chroma because it supports vector retrieval and is suitable for a small local prototype.

PostgreSQL with pgvector is another option, but it requires additional database setup.

Neo4j could be useful for more complex relationships, but a graph database is not necessary for the first version.

### Additional Research Sources

**RAG research paper:**  
https://arxiv.org/abs/2005.11401

**Embeddings documentation:**  
https://platform.openai.com/docs/guides/embeddings

**Text splitting and chunking:**  
https://python.langchain.com/docs/concepts/text_splitters/

These sources explain how retrieval, embeddings, and document processing support RAG systems.

### Proposed RAG Architecture

1. Select documents that I have permission to use.
2. Extract text and preserve source information.
3. Divide the documents into smaller chunks.
4. Generate embeddings for each chunk.
5. Store the embeddings in Chroma.
6. Retrieve relevant chunks when a student asks a question.
7. Generate an answer using the retrieved information.
8. Display citations linking back to the original sources.

Each chunk should retain its document title, URL, and access date.

### Source Permissions

I will confirm that I have permission to use each document before importing it.

Restricted course documents will not be uploaded to a public repository without permission.

For the first prototype, I plan to use a publicly accessible course project guide if its reuse is permitted.

### Source Trace Example

**Proposed source:** An IS373 assignment document that is permitted for use.

**Question:** Is a hosted application required during the Plan stage?

**Expected evidence:** The assignment states that hosting is optional during Plan and required during Build.

**Expected answer:** A hosted application is not required for Plan, but working hosted foundations are required for Build.

**Evaluation:** I will check whether the application retrieves the correct passage and cites the source.

If the answer is incorrect or unsupported, the test will fail.

This is an example of a planned evaluation, not a completed test.

### Evaluation Questions

1. Can the application find the correct assignment deadline?
2. Can it identify the required submission format?
3. Can it distinguish between Plan and Build requirements?
4. Does it provide evidence from the correct source?
5. Does it acknowledge when information is missing?

### Hosting and Resource Constraints

I plan to develop the first version locally before hosting it.

I will consider:

- Server memory and storage.
- Embedding and AI model costs.
- Retrieval speed.
- Docker compatibility.
- Available resources on my DigitalOcean server.

I will evaluate whether my existing server can support the application before deployment.

### Planned Checks

1. Import a permitted document and confirm its metadata.
2. Retrieve the correct passage for a test question.
3. Compare the generated answer with the original source.
4. Test a question with missing evidence.
5. Verify that the answer includes the correct citation.

### Current Status

The RAG architecture, database choice, and evaluation questions are planned.

No RAG retrieval or answer-generation tests have been executed yet.

My existing portfolio deployment checks do not prove that the RAG application works.

### RAG Next Steps

1. Confirm document permissions.
2. Select an embedding model.
3. Create a small local prototype using Chroma.
4. Test retrieval accuracy.
5. Record actual results and improve the application.

## Review Summary

### Completed

- Existing portfolio website and repository.
- QA and production deployment.
- Previous CI/CD and security checks.
- Career direction and portfolio layout comparison.
- Proposed RAG architecture and technical tool comparison.

### Planned or Still Needed

- Confirm the three employer postings against the original pages.
- Confirm permission to reuse the RAG source documents.
- Collect and document peer feedback.
- Improve portfolio case studies.
- Build and test the RAG prototype.
- Record new test results and any changes based on feedback.

### AI Assistance and My Contribution

I used AI assistance to help organize my research, compare technical approaches, and draft my project plan.

My existing portfolio and deployment work provide the technical foundation. I selected UX/UI design as my career direction and Chroma as my proposed RAG database.

I will verify research claims against original sources and document the tests I personally complete. AI-generated explanations are not treated as proof that the application works.
