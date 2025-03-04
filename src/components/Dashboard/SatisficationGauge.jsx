import React from 'react';
import { GaugeComponent } from 'react-gauge-component';

const SatisfactionGauge = () => {
  return (
    <div className="bg-[#060C29] rounded-[20px] w-full h-full p-6">
      <div className="mb-6">
        <h2 className="text-[18px] font-orbitron text-white">
          Satisfaction Rate
        </h2>
        <p className="text-[#64748B] text-[14px] text-base font-orbitron">
          From all projects
        </p>
      </div>

      <div className="relative flex justify-center items-center">
        <GaugeComponent
          id="gauge"
          type="semicircle"
          arc={{
            width: 0.15,
            padding: 0,
            cornerRadius: 1,
            colorArray: ['#0075FF', 'rgba(30, 41, 59, 0.5)'],
            subArcs: [{
              limit: 95,
              color: '#0075FF',
              showTick: false
            }]
          }}
          pointer={{
            type: "blob",
            animationDelay: 0,
            width: 25,
            height: 25,
            color: '#0075FF'
          }}
          labels={{
            valueLabel: {
              formatTextValue: () => '',
              style: { display: 'none' }
            },
            markLabel: {
              type: 'outer',
              marks: [
                { value: 0, label: '0%' },
                { value: 100, label: '95%' }
              ],
              style: {
                fill: '#64748B',
                fontSize: '14px',
                fontFamily: 'Orbitron'
              }
            }
          }}
          value={95}
          minValue={0}
          maxValue={95}
          style={{ width: '100%', height: '180px' }}
        />

        {/* Emoji Circle */}
        <div className="absolute top-[40%] -translate-y-1/2">
          <div className="relative">
            <div className="bg-[#0075FF] rounded-full p-4 w-12 h-12 flex items-center justify-center">
              <img src="/images/smile.png" alt="emoji" className="object-contain" />
            </div>
         
          </div>
        </div>

        {/* Percentage Display */}
        <div className="absolute bottom-4 text-center w-full">
       
          <p className="text-sm text-[#64748B] font-orbitron">Based on likes</p>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionGauge;