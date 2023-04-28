import React, {useEffect} from 'react'
import './EnvironmentAndSustainability.css'
import { useNavigate } from 'react-router-dom';
function EnvironmentAndSustainability() {
    //Scroll to the top on load-
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load

    const Navigate = useNavigate()
  return (
    <div className='w-full flex flex-col'>
        <div className='w-full h-[25vh] lg:h-[20vh] md:h-[30vh] xl:h-[40vh] pb-8 flex flex-col justify-end bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='ml-[10px] md:ml-[100px] my-auto'>Environment & Sustainability</h3>

                <h5 className='mr-[10px] md:mr-[100px] hidden md:flex align-middle text-xs cursor-wait' onClick={()=>{
                    Navigate('/')
                }}>
                    <span className='mr-2 text-gray-600'>For better, for cars</span>
                </h5>
            </div>
        </div>

        <div className='w-full px-[10px] lg:px-[100px] bg-white py-[20px] lg:py-[50px]'>
            <h3>Environment & Sustainability</h3>
            <p className='mt-[20px]'>The company has been very keen on ensuring that it creates a good reputation of ecological stewardship and sensitivity to the social matters in the society in the spirit of sustainable development.</p>
            <p className='mt-[20px]'>The website also summarises some of the projects that the company has engaged in as well as the strategic decisions that it has made.</p>
            <p className='mt-[20px]'>The trade fair portrayed the potential of the then and future civilizations to deploy technology, creativity, and innovation to create more consumables to boost the life of future generations.</p>
            <p className='mt-[20px]'>The campaign to save the environment has grown from the publicized protection of animals to a more solid response to the modern day concerns of global warming and climate change.</p>
            <p className='mt-[20px] underline colRo'>Environmental Geology and Sustainability</p>
            <p className='mt-[20px]'>Taking soil as an example, one will have to admit that the changes in the soil will necessarily pose a threat of extinction to several plants.</p>
            <p className='mt-[20px] underline colRo'>Environmental Globalization and Sustainability Laws</p>
            <p className='mt-[20px]'>Politicizing the environment is a term used to mean the collaboration of micro and macro players in an economy, with the support of governments and international bodies to conserve the environment.</p>
            <p className='mt-[20px] underline colRo'>Green Meetings: Environmental Impact and Sustainability</p>
            <p className='mt-[20px]'>The author argues that Green meetings can have positive environmental impact by engaging in certain practices from the beginning to the end of the Green meetings and events.</p>
        </div>
    </div>
  )
}

export default EnvironmentAndSustainability