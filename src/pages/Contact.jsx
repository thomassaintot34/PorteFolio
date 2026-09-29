import ContactInfos from "../components/contact/ContactInfos";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Contact</h1>
        <p className="text-gray-600 text-lg">
          Intéressé par mon profil ? Parlons de vos besoins et de mon projet d'alternance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <ContactInfos />
      </div>
    </div>
  );
}