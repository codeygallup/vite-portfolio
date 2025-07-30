export default function Indicators({ currentIndex, selectNode, projectData }) {
    console.log(projectData);
    
    return (
        <div className="carousel-indicators absolute bottom-0 left-0 right-0 flex justify-center p-4">
            {projectData.map((project, index) => (
                <button
                    key={index} 
                    className={`carousel-indicator mx-4 ${currentIndex === index ? 'active' : ''}`}
                    onClick={() => selectNode(index)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}