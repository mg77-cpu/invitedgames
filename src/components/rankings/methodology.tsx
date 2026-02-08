
import React from "react";

export function Methodology() {
  return (
    <div className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-lg font-bold font-serif text-gray-900 mb-6">
          Ranking Methodology
        </h3>
        
        <div className="bg-[#FAF9F6] p-8 rounded-xl border border-gray-100">
          <p className="text-sm text-gray-600 mb-6 max-w-3xl leading-relaxed">
            Invited Games rankings are calculated using a comprehensive points system that rewards competitive excellence, consistent performance, and strength of schedule. Rankings are updated weekly following tournament completion. Only clubs in good standing with active membership are eligible for national rankings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Championship Victories</h4>
              <p className="text-xs text-gray-500">100 points per tournament championship secured by any team representing the club.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Match Wins</h4>
              <p className="text-xs text-gray-500">10 points per match victory in sanctioned league or tournament play.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Strength of Schedule</h4>
              <p className="text-xs text-gray-500">Bonus points awarded for defeating higher-ranked opponents or winning away matches.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-2">Tournament Participation</h4>
              <p className="text-xs text-gray-500">Points awarded for competing in sanctioned regional and national events.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
