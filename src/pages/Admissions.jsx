import AdmissionBanner from "../component/admissions/AdmissionBanner";
import AdmissionOverview from "../component/admissions/AdmissionOverview";
import AdmissionProcess from "../component/admissions/AdmissionProcess";
import WhyParentsChooseUs from "../component/admissions/WhyParentsChooseUs";
import FeeStructure from "../component/admissions/FeeStructure";
import AdmissionFAQ from "../component/admissions/AdmissionFAQ";
import AdmissionCTA from "../component/admissions/AdmissionCTA";


import bannerImage from "../assets/image/admissions/admission-overview.png";

const Admissions = () => {
  return (
    <>
      <AdmissionBanner
        title="Admissions"
        subtitle="Admissions Open for Academic Session 2026–27"
        backgroundImage={bannerImage}
      />

      <AdmissionOverview />

      <AdmissionProcess />

      <WhyParentsChooseUs />

      <FeeStructure />

      <AdmissionFAQ />

      <AdmissionCTA />
    </>
  );
};

export default Admissions;