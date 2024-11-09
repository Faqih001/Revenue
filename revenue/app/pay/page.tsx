import ServiceSelection from './services';
import servicesData from './data.json';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Municipal Services</h1>
      <ServiceSelection services={servicesData.municipal_services} />
    </div>
  );
}