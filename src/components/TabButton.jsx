// TabButton component

// Children props are the content between the opening and closing tags of a component
export default function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}