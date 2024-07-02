import JoditEditor from 'jodit-react';
const TextEditor = ({ content, setContent }: { content: string; setContent: (content: string) => void }) => {
	return <JoditEditor value={content} onBlur={(newContent) => setContent(newContent)} />;
};

export default TextEditor;
