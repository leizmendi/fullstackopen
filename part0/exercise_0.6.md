```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>browser: Push note, reset input text and redraw notes
	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	activate server
	