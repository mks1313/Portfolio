import { useLocation } from "react-router-dom";

const SkeletonBlock = ({ className = "" }) => (
  <div className={`skeleton-block ${className}`.trim()} aria-hidden="true" />
);

const SkeletonTitle = ({ width = "w-72", centered = false }) => (
  <SkeletonBlock
    className={`h-12 ${width} rounded-2xl ${centered ? "mx-auto" : ""}`}
  />
);

const SkeletonParagraph = ({ lines = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonBlock
        key={index}
        className={`h-4 rounded-lg ${index === lines - 1 ? "w-3/4" : "w-full"}`}
      />
    ))}
  </div>
);

const PageAtmosphere = ({ children, orbA, orbB, orbC }) => (
  <div className="page-container bg-animated-gradient overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className={`absolute rounded-full filter blur-3xl ${orbA}`} />
      <div className={`absolute rounded-full filter blur-3xl ${orbB}`} />
      {orbC ? (
        <div className={`absolute rounded-full filter blur-3xl ${orbC}`} />
      ) : null}
    </div>
    <div className="content-wrapper relative z-10">{children}</div>
  </div>
);

const SkeletonHeader = ({
  titleWidth = "w-72",
  withSubtitle = false,
  centered = false,
}) => (
  <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
    <SkeletonTitle width={titleWidth} centered={centered} />
    <SkeletonBlock
      className={`h-1 w-32 rounded-full ${centered ? "mx-auto" : ""}`}
    />
    {withSubtitle ? (
      <SkeletonBlock
        className={`h-5 w-96 max-w-full rounded-lg ${centered ? "mx-auto" : ""}`}
      />
    ) : null}
  </div>
);

const HomePageSkeleton = () => (
  <PageAtmosphere
    orbA="top-20 left-20 w-72 h-72 bg-primary-500"
    orbB="bottom-20 right-20 w-96 h-96 bg-accent-purple"
    orbC="top-1/2 left-1/2 w-80 h-80 bg-accent-cyan"
  >
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <SkeletonTitle width="w-96 max-w-full" centered />
        <SkeletonBlock className="h-8 w-96 max-w-full rounded-xl mx-auto" />
        <div className="flex items-center justify-center gap-3">
          <SkeletonBlock className="h-5 w-32 rounded-lg" />
          <SkeletonBlock className="h-5 w-2 rounded-full" />
          <SkeletonBlock className="h-5 w-40 rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="skeleton-card p-5 rounded-2xl space-y-4">
            <SkeletonBlock className="h-5 w-1/2 rounded-lg" />
            <SkeletonBlock className="h-10 w-2/3 rounded-xl" />
          </div>
        ))}
      </div>

      <div className="skeleton-card p-8 rounded-2xl space-y-4">
        <SkeletonBlock className="h-7 w-1/3 rounded-xl" />
        <SkeletonParagraph lines={3} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <div className="skeleton-card rounded-3xl p-6 space-y-5">
            <SkeletonBlock className="h-36 w-36 rounded-full mx-auto" />
            <SkeletonBlock className="h-6 w-2/3 rounded-xl mx-auto" />
            <SkeletonBlock className="h-10 w-full rounded-xl" />
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <SkeletonBlock key={index} className="h-10 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="skeleton-card p-6 rounded-2xl space-y-4"
            >
              <SkeletonBlock className="h-6 w-1/3 rounded-lg" />
              <SkeletonParagraph lines={3} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageAtmosphere>
);

const AboutPageSkeleton = () => (
  <PageAtmosphere
    orbA="top-20 right-20 w-96 h-96 bg-accent-purple"
    orbB="bottom-20 left-20 w-80 h-80 bg-primary-500"
  >
    <div className="space-y-10">
      <SkeletonHeader titleWidth="w-56" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="skeleton-card p-8 space-y-5 rounded-2xl">
            <SkeletonBlock className="h-12 w-12 rounded-xl" />
            <SkeletonBlock className="h-7 w-2/3 rounded-xl" />
            <SkeletonParagraph lines={3} />
            <SkeletonBlock className="h-1 w-20 rounded-full" />
          </div>
        ))}
      </div>

      <div className="skeleton-card p-8 lg:p-12 rounded-2xl space-y-8">
        <SkeletonBlock className="h-9 w-72 max-w-full rounded-xl mx-auto" />
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <SkeletonBlock className="h-6 w-56 rounded-lg" />
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 7 }).map((__, pillIndex) => (
                <SkeletonBlock
                  key={`${index}-${pillIndex}`}
                  className="h-8 w-24 rounded-full"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageAtmosphere>
);

const ExperiencePageSkeleton = () => (
  <PageAtmosphere
    orbA="top-40 left-40 w-96 h-96 bg-accent-cyan"
    orbB="bottom-40 right-40 w-80 h-80 bg-accent-purple"
  >
    <div className="space-y-10">
      <SkeletonHeader titleWidth="w-72" />

      <div className="relative max-w-5xl mx-auto space-y-6">
        <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-linear-to-b from-primary-500 via-accent-purple to-accent-cyan hidden lg:block" />
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="relative lg:pl-12">
            <div className="hidden lg:block absolute left-2.5 top-5">
              <SkeletonBlock className="h-5 w-5 rounded-full" />
            </div>
            <div className="skeleton-card p-6 lg:p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <SkeletonBlock className="h-10 w-10 rounded-full" />
                <div className="space-y-2 w-full">
                  <SkeletonBlock className="h-5 w-1/3 rounded-lg" />
                  <SkeletonBlock className="h-4 w-1/4 rounded-lg" />
                </div>
              </div>
              <SkeletonParagraph lines={3} />
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 5 }).map((__, badgeIndex) => (
                  <SkeletonBlock
                    key={`${index}-${badgeIndex}`}
                    className="h-8 w-20 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageAtmosphere>
);

const ProjectsPageSkeleton = () => (
  <PageAtmosphere
    orbA="top-20 left-1/4 w-96 h-96 bg-accent-pink"
    orbB="bottom-20 right-1/4 w-80 h-80 bg-accent-emerald"
  >
    <div className="space-y-10">
      <SkeletonHeader titleWidth="w-80" withSubtitle />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="skeleton-card rounded-2xl overflow-hidden"
          >
            <SkeletonBlock className="h-44 w-full rounded-none" />
            <div className="p-5 space-y-4">
              <SkeletonBlock className="h-6 w-2/3 rounded-lg" />
              <SkeletonBlock className="h-4 w-1/3 rounded-lg" />
              <SkeletonParagraph lines={3} />
              <div className="flex gap-3 pt-2">
                <SkeletonBlock className="h-9 w-20 rounded-xl" />
                <SkeletonBlock className="h-9 w-20 rounded-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageAtmosphere>
);

const StudiesPageSkeleton = () => (
  <PageAtmosphere
    orbA="top-16 left-24 w-80 h-80 bg-accent-cyan"
    orbB="bottom-16 right-24 w-80 h-80 bg-accent-purple"
  >
    <div className="space-y-12">
      <SkeletonHeader titleWidth="w-72" withSubtitle centered />

      <div className="max-w-6xl mx-auto relative space-y-8">
        <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-0.5 bg-linear-to-b from-cyan-500/40 via-purple-500/40 to-pink-500/40 -translate-x-1/2" />
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="relative">
            <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
              <SkeletonBlock className="h-4 w-4 rounded-full" />
            </div>
            <div
              className={`md:grid md:grid-cols-2 md:gap-12 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div
                className={`${index % 2 === 1 ? "md:col-start-2" : "md:col-start-1"}`}
              >
                <div className="skeleton-card p-6 rounded-2xl space-y-4">
                  <SkeletonBlock className="h-6 w-2/3 rounded-lg" />
                  <SkeletonBlock className="h-4 w-1/4 rounded-lg" />
                  <SkeletonParagraph lines={3} />
                </div>
              </div>
              <div
                className={`hidden md:block ${index % 2 === 1 ? "md:col-start-1" : "md:col-start-2"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageAtmosphere>
);

const NotFoundSkeleton = () => (
  <PageAtmosphere
    orbA="top-24 right-20 w-72 h-72 bg-primary-500"
    orbB="bottom-24 left-20 w-80 h-80 bg-accent-purple"
  >
    <div className="space-y-8 max-w-2xl">
      <SkeletonHeader titleWidth="w-56" />
      <div className="skeleton-card p-6 rounded-2xl">
        <SkeletonParagraph lines={4} />
      </div>
    </div>
  </PageAtmosphere>
);

const getSkeletonByPath = (pathname) => {
  if (pathname === "/") {
    return <HomePageSkeleton />;
  }

  if (pathname.startsWith("/about")) {
    return <AboutPageSkeleton />;
  }

  if (pathname.startsWith("/experience")) {
    return <ExperiencePageSkeleton />;
  }

  if (pathname.startsWith("/projects")) {
    return <ProjectsPageSkeleton />;
  }

  if (pathname.startsWith("/studies")) {
    return <StudiesPageSkeleton />;
  }

  return <NotFoundSkeleton />;
};

const RouteSkeleton = () => {
  const { pathname } = useLocation();
  return getSkeletonByPath(pathname);
};

export default RouteSkeleton;
