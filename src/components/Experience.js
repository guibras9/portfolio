import { Container } from "react-bootstrap";
import 'animate.css';

export const Experience = () => {
    const processDescription = (text) => {
        // Substitui pontos finais por ponto final + quebra de linha, mas ignora reticências
        return text.replace(/\.\s+/g, '.<br />').replace(/\.<br \/>/g, '.<br />');
    };
   
    const timelineData = [
        {
            id: 1,
            year: "2018-2020",
            title: "Degree in Computer Engeneering - Coimbra University",
            description: "(suspended enrolement)",
            position: "left"
        },
        {
            id: 2,
            year: "2020-2023",
            title: "Degree in Design and Multimedia",
            description: "",
            position: "right"
        },
        {
            id: 3,
            year: "2024",
            title: "Web Developer - Digital Marketing Elevation",
            description: "Designed and developed high-converting landing pages for sales websites (mostly using Clickfunnels and Wordpress). Applied digital marketing and persuasive copywriting strategies to enhance conversion rates. Gained valuable experience in sales, business management, and growth strategies. Conducted photoshoots and event photography to create engaging visual content. Collaborated with design, marketing, and sales teams to optimize user experience and campaign performance " ,
            position: "left"
        },
        {
            id: 4,
            year: "2025", // Ano vazio
            title: "", // Título vazio
            description: "", // Descrição vazia
            position: "right",
            isEmpty: true // Propriedade adicional para marcar como um ponto vazio
        }
    ];
   
    // Função para calcular a posição vertical de cada ponto
    const calculateDotPosition = (index) => {
        if (index === 0) return '30px'; // Posição do primeiro ponto permanece no topo
        
        // Para pontos subsequentes, a posição depende do item anterior
        const prevItemHasLongContent = timelineData[index - 1].description.length > 100;
        
        if (prevItemHasLongContent) {
            return index === 3 ? '400px' : '200px'; // Ajuste para textos longos
        } else {
            return '100px'; // Valor padrão para textos curtos
        }
    };
   
    return (
        <section className="experience" id="experience">
            <Container>
                <h1 className="text-center mb-5">Experience</h1>
               
                <div className="timeline-container">
                    <div className="timeline-line"></div>
                   
                    {timelineData.map((item, index) => (
                        <div
                            key={item.id}
                            className={`timeline-item ${item.position} animate__animated animate__fadeIn`}
                            style={item.isEmpty ? { minHeight: '250px', marginBottom: '0' } : {}}
                        >
                            <div 
                                className="timeline-dot" 
                                style={{ top: calculateDotPosition(index) }}
                            ></div>
                            {!item.isEmpty && (
                                <div className="timeline-content">
                                    <h3 className="timeline-year">{item.year}</h3>
                                    <h4 className="timeline-title">{item.title}</h4>
                                    <p
                                        className="timeline-description"
                                        dangerouslySetInnerHTML={{ __html: processDescription(item.description) }}
                                    ></p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>        
    )
}