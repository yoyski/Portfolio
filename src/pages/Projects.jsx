import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  SearchBar,
  CategoryFilters,
  FeaturedSlider,
  ProjectCard,
  Pagination,
} from "../components/projects";
import { projectsData } from "../data/projectsData";
import {
  pageVariants,
  containerVariants,
  itemVariants,
} from "../utils/animations";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const sliderRef = useRef(null);

  const categories = ["All", "Web Development", "Mini Projects"];

  const filteredProjects = projectsData.filter((project) => {
    const query = search.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((tech) => tech.toLowerCase().includes(query));

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = otherProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(otherProjects.length / projectsPerPage);

  const goToSlide = (index) => {
    setFeaturedIndex(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const prevFeatured = () =>
    goToSlide(
      featuredIndex === 0 ? featuredProjects.length - 1 : featuredIndex - 1,
    );
  const nextFeatured = () =>
    goToSlide(
      featuredIndex === featuredProjects.length - 1 ? 0 : featuredIndex + 1,
    );

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const index = Math.round(
      sliderRef.current.scrollLeft / sliderRef.current.clientWidth,
    );
    setFeaturedIndex(index);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("all-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const MotionDiv = motion.div;

  return (
    <MotionDiv
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-5xl mx-auto md:px-8 py-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Portfolio
            </span>
          </div>
          <h1
            className="text-4xl font-bold text-gray-900 dark:text-gray-100"
            style={{ letterSpacing: "-0.02em" }}
          >
            Projects
          </h1>
        </MotionDiv>

        {/* Search and Filters */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CategoryFilters
            categories={categories}
            selected={selectedCategory}
            onChange={handleCategoryChange}
          />
        </MotionDiv>

        {/* Featured Slider */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FeaturedSlider
            projects={featuredProjects}
            sliderRef={sliderRef}
            currentIndex={featuredIndex}
            onScroll={handleScroll}
            onSlideChange={goToSlide}
            onPrev={prevFeatured}
            onNext={nextFeatured}
          />
        </MotionDiv>

        {/* Divider */}
        <div className="w-full mb-12 border-t border-gray-200 dark:border-gray-700" />

        {/* Other Projects Grid */}
        <section id="all-projects">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center justify-between mb-5"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-0.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                {selectedCategory === "All" ? "All Projects" : selectedCategory}
              </h2>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {otherProjects.length} project
              {otherProjects.length !== 1 ? "s" : ""}
            </span>
          </MotionDiv>

          {currentProjects.length > 0 ? (
            <>
              <MotionDiv
                variants={containerVariants}
                initial="initial"
                animate="animate"
                key={currentPage} // Re-animate when page changes
                className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
              >
                {currentProjects.map((project, i) => (
                  <MotionDiv key={i} variants={itemVariants}>
                    <ProjectCard project={project} />
                  </MotionDiv>
                ))}
              </MotionDiv>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          ) : (
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-16 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 text-center"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No projects found matching your criteria.
              </p>
            </MotionDiv>
          )}
        </section>
      </div>
    </MotionDiv>
  );
}