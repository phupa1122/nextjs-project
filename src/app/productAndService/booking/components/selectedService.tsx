import React, { useState } from 'react';

// Interface สำหรับ props
interface selectedServiceProps {
  services: string[];
  workers: Record<string, string[]>;
}

const selectedService: React.FC<selectedServiceProps> = ({ services, workers }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (service: string) => {
    setSelectedService(service);
  };

  return (
    <div>
      {/* ปุ่มเลือกบริการ */}
      <div className="flex flex-row mt-1 space-x-3">
        {services.map((service) => (
          <button
            key={service}
            className="btn btn-active btn-ghost"
            onClick={() => handleServiceClick(service)}
          >
            {service}
          </button>
        ))}
      </div>

      {/* รายการช่าง */}
      {selectedService && (
        <div className="mt-5">
          <h2 className="text-lg font-bold">{selectedService}</h2>
          <ul className="list-disc pl-5">
            {workers[selectedService].map((worker) => (
              <li key={worker} className="mt-2">
                {worker}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default selectedService;
