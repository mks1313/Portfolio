import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";
import github from "../assets/icons/github.svg";
import Button from "../components/Button";

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col md:flex-col justify-between bg-black text-gray-300 lg:pl-8">
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8">
                <div className="flex justify-start items-center animate-slideIn">
                    <div className="flex flex-col items-center" style={{ height: "100px" }}>
                        <Button href={"https://github.com/mks1313/project-3-client"} imageSrc={github} alt="GitHub-client" />
                        <span className="text-white mt-2">Client</span>
                    </div>
                    <div className="flex flex-col items-center ml-4" style={{ height: "100px" }}>
                        <Button href={"https://github.com/mks1313/project-3-server"} imageSrc={github} alt="GitHub-server" />
                        <span className="text-white mt-2">Server</span>
                    </div>
                    <div className="flex flex-col items-center ml-4" style={{ height: "100px" }}>
                        <Button href={"https://project-3-client.vercel.app/"} text="Visit" classname="custom-button" />
                    </div>
                </div>
                <Letters 
                    value={t('projects.title1')} 
                    size="xl" 
                    underline={false} 
                    gradient={true} 
                    className="text-center text-white mb-2 animate-slideIn" 
                    id="title1" 
                />
                <Letters 
                    value={t('projects.date1')} 
                    size="s" 
                    underline={false} 
                    gradient={true} 
                    className="text-center text-white mb-2 animate-slideIn" 
                    id="date1" 
                />
                <img 
                    src={t('projects.image1')} 
                    alt="Imagen de web" 
                    className="w-90 h-60 mb-8 mx-auto mt-4 rounded-lg border-[6px] border-gray-200 animate-slideIn" 
                />
                <Letters 
                    value={t('projects.description1')} 
                    size="l" 
                    underline={false} 
                    gradient={true} 
                    className="text-center text-white animate-slideIn" 
                    id="description1" 
                />
            </div>
            <div className="w-full mx-4">
                <hr className="bg-gray-100 h-px mt-4 mb-8" />
            </div>
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8">
                <div className="flex justify-start items-center animate-slideIn">
                    <div className="flex flex-col items-center mr-4">
                        <Button href={"https://github.com/mks1313/Historical-events-CRUD"} imageSrc={github} alt="GitHub-Historical-events-CRUD" />
                    </div>
                    <div className="flex flex-col items-center">
                        <Button href={"https://historical-events-crud.vercel.app/"} text="Visit" classname="custom-button" />
                    </div>
                </div>
                <Letters 
                    value={t('projects.title')} 
                    size="xl" 
                    underline={false} 
                    gradient={true} 
                    className="text-center text-white mb-2 animate-slideIn" 
                    id="title" 
                />
                <Letters 
                    value={t('projects.date')} 
                    size="s" 
                    underline={false} 
                    gradient={true} 
                    className="text-center text-white mb-2 animate-slideIn" 
                    id="date" 
                />
                <img 
                    src={t('projects.image')} 
                    alt="Imagen de web" 
                    className="w-90 h-60 mb-8 mx-auto mt-4 rounded-lg border-[6px] border-gray-200 animate-slideIn" 
                />
                <Letters 
                    value={t('projects.description')} 
                    size="l" 
                    underline={false} 
                    gradient={true} 
                    className="text-center text-white animate-slideIn" 
                    id="description" 
                />
            </div>
            <div className="w-full mx-4">
                <hr className="bg-gray-100 h-px mt-4 mb-8" />
            </div>
        </div>
    );
};

export default Projects;



