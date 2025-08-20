import React from 'react';

type Props = {};

const data = [
  {
    title: 'Increase Sales',
    description:
      'Need to get more sales? Guess what !!! you have landed at the right platform. We along with our team of experts develop the best marketing mix for your brand which will fetch you better reach and will bring amazing sale.',
  },
  {
    title: 'The ROI Experts',
    description:
      'Right marketing at the right time and at right cost brings superb ROI. We promise to bring amazing ROI with the help of our experienced team who adds their own flavour of marketing strategy to grow your business.',
  },
  {
    title: 'Best Practices',
    description:
      'Ideas that are feasible in real life makes it a great success similarly, we work on our ideas and content that helps our clients to boost their businesses. With our real time practice, it makes all our work commendable.',
  },
  {
    title: 'Continuous Support',
    description:
      'we are your partners in success. We are dedicated to building long-term relationships with our clients, offering continuous support, and adapting our strategies to keep up with the dynamic market trends.',
  },
];

const RiseToTop = (props: Props) => {
  return (
    <section className="flex w-full flex-col items-center px-8 py-12 md:px-28 md:py-20">
      <div className="mx-auto w-full max-w-7xl space-y-10 md:space-y-20">
        <div className="mx-auto w-full max-w-md">
          <h2 className="text-center text-3xl font-bold leading-10 tracking-tighter text-neutral-900 md:text-4xl lg:text-[44px]">
            Rise To The Top
          </h2>
          <p className="text-center text-lg text-neutral-600">
            Our design services starts and ends with a best in class experience
            strategy that builds brands.
          </p>
        </div>
        <div>
          <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-4">
            {data.map((item, index) => (
              <div
                className="space-y-3 rounded-2xl bg-white bg-cover p-8 shadow-card even:my-8 even:bg-[url('/services/bg.webp')]"
                key={item.title}
              >
                <h4 className="text-clip bg-gradient-to-br from-t via-green via-60% to-green bg-clip-text text-5xl text-transparent">
                  {index + 1}
                </h4>
                <h3 className="text-lg font-bold tracking-tighter">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiseToTop;
