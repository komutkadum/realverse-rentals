import React from 'react';
import ProfileSidebar from '../navigation/ProfileSidebar';

function Dashboard() {
  return (
    <>
      <div className="">
        <div className="max-w-6xl mx-auto h-fit mt-6">
          <div className="grid grid-cols-12">
            {/* <!-- left sidebar --> */}
            <ProfileSidebar />
            {/* <!-- end of left sidebar -->
            <!-- right sidebar --> */}

            {/* <!-- end of right sidebar --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
