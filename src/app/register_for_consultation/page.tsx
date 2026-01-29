import PackageSection from "../components/homepage/PackageSection"
import GridCard from "../components/RegisterForConsultation/GridCard"

const RegisterForConsultationPage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 pt-40 md:pt-50 pb-20">
        <GridCard />
      </div>
      <div className="pb-20">
        <PackageSection />
      </div>
    </div>
  )
}

export default RegisterForConsultationPage