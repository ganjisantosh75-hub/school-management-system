import AcademicBanner from "../component/academics/AcademicBanner";
import AcademicOverview from "../component/academics/AcademicOverview";
import Curriculum from "../component/academics/Curriculum"; 
import TeachingMethodology from "../component/academics/TeachingMethodology";
import AcademicCTA from "../component/academics/AcademicCTA";
import AcademicFacilities from "../component/academics/AcademicFacilities";

import bannerImage from "../assets/image/academics-banner.png";

const Academics = () => {
  return (
    <>
      <AcademicBanner
        title="Academics"
        subtitle="Inspiring Excellence Through Learning"
        backgroundImage={bannerImage}
      />

      <AcademicOverview />
      <Curriculum />
      <TeachingMethodology />
      <AcademicFacilities />
      <AcademicCTA />
    </>
  );
};

export default Academics;