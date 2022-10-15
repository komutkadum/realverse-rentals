import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProfileSidebar from '../navigation/ProfileSidebar';

function Activity() {
  const router = useRouter();
  const { tab } = router.query;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/activity?tab=${!tab ? 'contact' : tab}`
        );
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [tab]);

  return (
    <>
      <div className="">
        <div className="max-w-6xl mx-auto h-fit mt-6">
          <div className="grid grid-cols-12">
            {/* <!-- left sidebar --> */}
            <ProfileSidebar />
            {/* <!-- end of left sidebar -->
            <!-- right sidebar --> */}
            <div className="col-span-12 mx-3 md:col-span-7 mt-10 md:mt-0 sm:mx-7">
              <div className=" pb-5 gap-y-2 grid">
                <h1 className="font-bold text-xl font-header">My Activity</h1>
                <div className="grid grid-cols-12 gap-x-1 sm:gap-x-2 lg:gap-x-3 xl:gap-x-5 text-gray-700">
                  <Link href="/activity">
                    <div
                      className={`${
                        tab === '' || !tab
                          ? 'activity_active'
                          : 'activity_inactive'
                      }`}
                    >
                      <p>Contact Property</p>
                    </div>
                  </Link>
                  <Link href="/activity?tab=seen">
                    <div
                      className={`${
                        tab === 'seen' ? 'activity_active' : 'activity_inactive'
                      }`}
                    >
                      <p>Seen Property</p>
                    </div>
                  </Link>
                  <Link href="/activity?tab=saved">
                    <div
                      className={`${
                        tab === 'saved'
                          ? 'activity_active'
                          : 'activity_inactive'
                      }`}
                    >
                      <p>Saved Property</p>
                    </div>
                  </Link>
                  <Link href="/activity?tab=recent">
                    <div
                      className={`${
                        tab === 'recent'
                          ? 'activity_active'
                          : 'activity_inactive'
                      }`}
                    >
                      <p>Recent Search</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="">
                {loading ? 'loading' : JSON.stringify(data)}
              </div>
            </div>
            {/* <!-- end of right sidebar --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Activity;
