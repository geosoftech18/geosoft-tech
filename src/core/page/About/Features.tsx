import TextFlip from '@/core/components/TextFlip';
import React from 'react';

const data = [
  {
    title: 'Innovation',
    description:
      'We are relentless explorers, constantly pushing boundaries and seeking new ways to shape the digital future.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Notes"
        width="59"
        height="59"
        viewBox="0 0 59 59"
      >
        <circle
          id="Oval-1"
          cx="29.5"
          cy="29.5"
          r="29.5"
          fill="#b7eef5"
        ></circle>
        <path
          id="Combined_Shape-25"
          data-name="Combined Shape"
          d="M0,22.054A2.323,2.323,0,0,0,2.322,24.38H20.9a2.326,2.326,0,0,0,2.322-2.327V2.327A2.323,2.323,0,0,0,20.9,0H2.322A2.326,2.326,0,0,0,0,2.327Z"
          transform="translate(14.225 20.166)"
          fill="#008aba"
        ></path>
        <path
          id="Combined_Shape-26"
          data-name="Combined Shape"
          d="M23.219,2.327A2.323,2.323,0,0,0,20.9,0H2.322A2.326,2.326,0,0,0,0,2.327V22.054A2.323,2.323,0,0,0,2.322,24.38H20.9a2.326,2.326,0,0,0,2.322-2.327Z"
          transform="translate(21.337 14.235)"
          fill="#6abbd7"
        ></path>
        <path
          id="Shape-12"
          d="M9.237,11.8H1.152a1.18,1.18,0,0,1,0-2.36H9.237a1.18,1.18,0,0,1,0,2.36Zm-.58-4.72h-7.5a1.18,1.18,0,0,1,0-2.36h7.5a1.18,1.18,0,0,1,0,2.36ZM12.12,2.36H1.155A1.169,1.169,0,0,1,0,1.18,1.169,1.169,0,0,1,1.155,0H12.12a1.169,1.169,0,0,1,1.155,1.18A1.169,1.169,0,0,1,12.12,2.36Z"
          transform="translate(26.236 18.73)"
          fill="#b7eef5"
        ></path>
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description:
      "Honesty, transparency, and trust are the bedrock of our relationships. We believe in doing what's right, always.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="58"
        viewBox="0 0 58 58"
      >
        <g id="Help" transform="translate(0 0)">
          <circle
            id="Oval-2"
            cx="29"
            cy="29"
            r="29"
            transform="translate(0 0)"
            fill="#ffe0ab"
          ></circle>
          <path
            id="Shape-3"
            d="M18.422,36.975A18.517,18.517,0,0,1,11.2,35.527a18.373,18.373,0,0,1-9.766-9.715A17.854,17.854,0,0,1,0,18.79,18.9,18.9,0,0,1,5.346,5.453,18.155,18.155,0,0,1,18.422,0a16.92,16.92,0,0,1,6.883,1.458,17.805,17.805,0,0,1,5.673,4,18.742,18.742,0,0,1,3.852,5.966,19.55,19.55,0,0,1,1.42,7.371,18.013,18.013,0,0,1-1.42,7.021A18.456,18.456,0,0,1,30.978,31.6a18.06,18.06,0,0,1-5.673,3.929A17.07,17.07,0,0,1,18.422,36.975Zm-.3-27.153a8.358,8.358,0,0,0-6.008,2.538,8.789,8.789,0,0,0,0,12.255,8.379,8.379,0,0,0,12.015,0,8.789,8.789,0,0,0,0-12.255A8.357,8.357,0,0,0,18.125,9.822Z"
            transform="translate(10.5 10.15)"
            fill="#fbc774"
          ></path>
          <path
            id="Shape-4"
            data-name="Shape-4"
            d="M18.642,37a19.338,19.338,0,0,1-6.092-1.026.672.672,0,0,1-.353-.646l1.042-9.375a.49.49,0,0,1,.249-.375,8.676,8.676,0,0,0,10.025,0,.48.48,0,0,1,.248.375L24.8,35.328a.683.683,0,0,1-.438.682A18.88,18.88,0,0,1,18.642,37ZM35.388,24.805a.539.539,0,0,1-.059,0l-9.375-1.041a.48.48,0,0,1-.375-.248,8.676,8.676,0,0,0,0-10.025.49.49,0,0,1,.375-.249L35.328,12.2a.561.561,0,0,1,.061,0,.684.684,0,0,1,.584.356A19.338,19.338,0,0,1,37,18.642a18.878,18.878,0,0,1-.99,5.722A.687.687,0,0,1,35.388,24.805Zm-33.775,0a.686.686,0,0,1-.622-.441A18.875,18.875,0,0,1,0,18.642a19.18,19.18,0,0,1,1.041-6.119.682.682,0,0,1,.57-.329.561.561,0,0,1,.061,0l9.374,1.042a.49.49,0,0,1,.376.25,8.677,8.677,0,0,0,0,10.023.478.478,0,0,1-.376.249L1.672,24.8A.54.54,0,0,1,1.612,24.805ZM13.489,11.422h0a.49.49,0,0,1-.249-.376L12.2,1.672a.68.68,0,0,1,.326-.631A19.18,19.18,0,0,1,18.642,0a18.873,18.873,0,0,1,5.722.99.682.682,0,0,1,.438.682l-1.041,9.374a.479.479,0,0,1-.249.376,8.677,8.677,0,0,0-10.022,0Z"
            transform="translate(10 10)"
            fill="#f5a623"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    description:
      'We foster a culture of teamwork and shared knowledge, recognizing that together, we achieve more.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="55"
        viewBox="0 0 55 55"
      >
        <g id="Network" transform="translate(0 -0.101)">
          <circle
            id="Oval-3"
            cx="27.5"
            cy="27.5"
            r="27.5"
            transform="translate(0 0.101)"
            fill="#b6ccf9"
          ></circle>
          <path
            id="Shape-5"
            d="M16.792,37.125a3.325,3.325,0,1,1,3.25-3.324A3.291,3.291,0,0,1,16.792,37.125Zm14.625-5.541a4.389,4.389,0,0,1-4.333-4.433,4.54,4.54,0,0,1,.154-1.175l-10.382-5.31L7.473,26.774a4,4,0,0,1,.11.932,3.84,3.84,0,0,1-3.792,3.878,3.88,3.88,0,0,1,0-7.757,3.736,3.736,0,0,1,2.58,1.036l8.581-5.586L6.512,12.144a4.258,4.258,0,0,1-2.179.6A4.389,4.389,0,0,1,0,8.312,4.389,4.389,0,0,1,4.333,3.879,4.389,4.389,0,0,1,8.667,8.312a4.506,4.506,0,0,1-.608,2.265l8.291,7.006L22.344,7.123a4.173,4.173,0,0,1-1.219-2.968,4.064,4.064,0,1,1,8.125,0,4.115,4.115,0,0,1-4.062,4.156,3.977,3.977,0,0,1-.949-.114l-6.1,10.646L28.32,24.051a4.254,4.254,0,0,1,3.1-1.333,4.434,4.434,0,0,1,0,8.865Z"
            transform="translate(10.694 9.038)"
            fill="#79a0ee"
          ></path>
          <circle
            id="Oval-4"
            data-name="Oval-4"
            cx="6.875"
            cy="6.875"
            r="6.875"
            transform="translate(20.275 21.774)"
            fill="#4577d8"
          ></circle>
        </g>
      </svg>
    ),
  },
  {
    title: 'Quality',
    description:
      'Exceptional results are not a luxury, but a standard. We are meticulous in everything we do, from concept to execution.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="55"
        viewBox="0 0 55 55"
      >
        <g id="Network" transform="translate(0 -0.101)">
          <circle
            id="Oval-3"
            cx="27.5"
            cy="27.5"
            r="27.5"
            transform="translate(0 0.101)"
            fill="#b6ccf9"
          ></circle>
          <path
            id="Shape-5"
            d="M16.792,37.125a3.325,3.325,0,1,1,3.25-3.324A3.291,3.291,0,0,1,16.792,37.125Zm14.625-5.541a4.389,4.389,0,0,1-4.333-4.433,4.54,4.54,0,0,1,.154-1.175l-10.382-5.31L7.473,26.774a4,4,0,0,1,.11.932,3.84,3.84,0,0,1-3.792,3.878,3.88,3.88,0,0,1,0-7.757,3.736,3.736,0,0,1,2.58,1.036l8.581-5.586L6.512,12.144a4.258,4.258,0,0,1-2.179.6A4.389,4.389,0,0,1,0,8.312,4.389,4.389,0,0,1,4.333,3.879,4.389,4.389,0,0,1,8.667,8.312a4.506,4.506,0,0,1-.608,2.265l8.291,7.006L22.344,7.123a4.173,4.173,0,0,1-1.219-2.968,4.064,4.064,0,1,1,8.125,0,4.115,4.115,0,0,1-4.062,4.156,3.977,3.977,0,0,1-.949-.114l-6.1,10.646L28.32,24.051a4.254,4.254,0,0,1,3.1-1.333,4.434,4.434,0,0,1,0,8.865Z"
            transform="translate(10.694 9.038)"
            fill="#79a0ee"
          ></path>
          <circle
            id="Oval-4"
            data-name="Oval-4"
            cx="6.875"
            cy="6.875"
            r="6.875"
            transform="translate(20.275 21.774)"
            fill="#4577d8"
          ></circle>
        </g>
      </svg>
    ),
  },
  {
    title: 'Customer-Centricity',
    description:
      'You are at the heart of everything we do. We listen intently, understand your needs, and go the extra mile to exceed your expectations.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="55"
        viewBox="0 0 55 55"
      >
        <g id="Network" transform="translate(0 -0.101)">
          <circle
            id="Oval-3"
            cx="27.5"
            cy="27.5"
            r="27.5"
            transform="translate(0 0.101)"
            fill="#b6ccf9"
          ></circle>
          <path
            id="Shape-5"
            d="M16.792,37.125a3.325,3.325,0,1,1,3.25-3.324A3.291,3.291,0,0,1,16.792,37.125Zm14.625-5.541a4.389,4.389,0,0,1-4.333-4.433,4.54,4.54,0,0,1,.154-1.175l-10.382-5.31L7.473,26.774a4,4,0,0,1,.11.932,3.84,3.84,0,0,1-3.792,3.878,3.88,3.88,0,0,1,0-7.757,3.736,3.736,0,0,1,2.58,1.036l8.581-5.586L6.512,12.144a4.258,4.258,0,0,1-2.179.6A4.389,4.389,0,0,1,0,8.312,4.389,4.389,0,0,1,4.333,3.879,4.389,4.389,0,0,1,8.667,8.312a4.506,4.506,0,0,1-.608,2.265l8.291,7.006L22.344,7.123a4.173,4.173,0,0,1-1.219-2.968,4.064,4.064,0,1,1,8.125,0,4.115,4.115,0,0,1-4.062,4.156,3.977,3.977,0,0,1-.949-.114l-6.1,10.646L28.32,24.051a4.254,4.254,0,0,1,3.1-1.333,4.434,4.434,0,0,1,0,8.865Z"
            transform="translate(10.694 9.038)"
            fill="#79a0ee"
          ></path>
          <circle
            id="Oval-4"
            data-name="Oval-4"
            cx="6.875"
            cy="6.875"
            r="6.875"
            transform="translate(20.275 21.774)"
            fill="#4577d8"
          ></circle>
        </g>
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: 'url(/about/features.svg)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl space-y-4 px-8 py-12 md:py-28">
        <div className="grid w-full grid-cols-1 gap-6 md:gap-10 lg:grid-cols-2">
          <div className="w-full space-y-5">
            <h2 className="text-xl text-black">
              Values: The Cornerstones of Our Success
            </h2>
            <h3 className="text-3xl text-black md:text-4xl lg:text-5xl">
              <TextFlip
                fontSize={76}
                texts={[
                  'Innovation',
                  'Integrity',
                  'Collaboration',
                  'Quality',
                  'Customer-Centricity',
                  '',
                ]}
              />
            </h3>
          </div>
          {data.map((item) => (
            <div
              key={item.title}
              className="flex w-full max-w-md items-start gap-5 rounded-2xl p-8 transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-card"
            >
              <div>{item.icon}</div>
              <div className="space-y-4">
                <h3 className="text-lg text-black">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
