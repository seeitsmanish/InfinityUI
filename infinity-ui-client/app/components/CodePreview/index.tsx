import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodePreviewProps {
    code: string;
    language?: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code, language = 'text' }) => {
    return (
        <div>
            <SyntaxHighlighter customStyle={{
                margin: '0px'
            }} language={language} style={atomOneDark}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodePreview;