import TextBox from './TextBox';
import textbox from '../assets/OurServices.png';
import webd from '../assets/webd.png';
import Card from './Card';
import gamed from '../assets/gamed.svg';
import projm from '../assets/projm.svg';

export default function OurServices() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full">
                <TextBox
                    imageUrl={textbox}
                    heading="Our Services"
                    subtext="Transform your brand with our innovative digital solutions that captivate and engage your audience."
                    className="h-[350px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
                    headingClass="text-4xl font-bold mb-4"
                    subtextClass="text-lg max-w-2xl"
                />
            </div>
            <div className="w-full flex justify-center">
                <div className="w-4/5">
                    <div className="grid grid-cols-2 w-full border border-gray-300">
                        <div className="border-r border-b border-gray-300">
                            <Card
                                icon={webd}
                                heading="Web Design"
                                paragraph="Transform your online presence with our cutting-edge web design services, tailored to captivate and engage your audience."
                                className="h-full p-6"
                                iconClass="w-12 h-12 mb-4"
                                headingClass="text-xl font-semibold mb-4"
                                paragraphClass="text-sm"
                            />
                        </div>
                        <div className="border-b border-gray-300">
                            <Card
                                icon={gamed}
                                heading="Game Development"
                                paragraph="Immerse yourself in the world of gaming with our innovative game development services, designed to provide an unparalleled gaming experience."
                                className="h-full p-6"
                                iconClass="w-12 h-12 mb-4"
                                headingClass="text-xl font-semibold mb-4"
                                paragraphClass="text-sm"
                            />
                        </div>
                        <div className="border-r border-gray-300">
                            <Card
                                icon={projm}
                                heading="Project Management"
                                paragraph="Ensure the success of your projects with our comprehensive project management services, tailored to meet your specific needs and goals."
                                className="h-full p-6"
                                iconClass="w-12 h-12 mb-4"
                                headingClass="text-xl font-semibold mb-4"
                                paragraphClass="text-sm"
                            />
                        </div>
                        <div>
                            <Card
                                icon={projm}
                                heading="Digital Marketing"
                                paragraph="Boost your brand's visibility and engagement with our targeted digital marketing strategies, designed to drive results and growth."
                                className="h-full p-6"
                                iconClass="w-12 h-12 mb-4"
                                headingClass="text-xl font-semibold mb-4"
                                paragraphClass="text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
