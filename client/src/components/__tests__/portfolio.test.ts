import { describe, it, expect } from "vitest";
import { portfolioData } from "@/data/portfolio";

describe("Portfolio Data", () => {
  describe("Personal Information", () => {
    it("should have valid personal data", () => {
      expect(portfolioData.personal.name).toBe("Ammar Alkhja");
      expect(portfolioData.personal.title).toBe("Backend Developer | Full-Stack Developer");
      expect(portfolioData.personal.email).toBe("Ammoooralkhja@gmail.com");
      expect(portfolioData.personal.github).toBe("https://github.com/githubAmmarov");
      expect(portfolioData.personal.linkedin).toBe("https://www.linkedin.com/in/mohammad-ammar-alkhja");
    });

    it("should have non-empty summary", () => {
      expect(portfolioData.personal.summary.length).toBeGreaterThan(0);
    });
  });

  describe("Skills", () => {
    it("should have soft skills", () => {
      expect(portfolioData.skills.softSkills.length).toBeGreaterThan(0);
      expect(portfolioData.skills.softSkills).toContain("Communication skills");
      expect(portfolioData.skills.softSkills).toContain("Problem-Solving");
    });

    it("should have technical skills categories", () => {
      expect(portfolioData.skills.technical.length).toBeGreaterThan(0);
      const categories = portfolioData.skills.technical.map((cat) => cat.category);
      expect(categories).toContain("Backend Development");
      expect(categories).toContain("Web Technologies");
    });

    it("should have technologies with icons", () => {
      expect(portfolioData.skills.technologies.length).toBeGreaterThan(0);
      const tech = portfolioData.skills.technologies[0];
      expect(tech).toHaveProperty("name");
      expect(tech).toHaveProperty("icon");
      expect(tech).toHaveProperty("category");
    });
  });

  describe("Experience", () => {
    it("should have at least one experience entry", () => {
      expect(portfolioData.experience.length).toBeGreaterThan(0);
    });

    it("should have valid experience data", () => {
      const exp = portfolioData.experience[0];
      expect(exp.title).toBe("ERP System Customization Specialist");
      expect(exp.company).toBe("Digit Innovation Center");
      expect(exp.description.length).toBeGreaterThan(0);
      expect(exp.technologies.length).toBeGreaterThan(0);
    });
  });

  describe("Projects", () => {
    it("should have multiple projects", () => {
      expect(portfolioData.projects.length).toBeGreaterThan(0);
    });

    it("should have valid project structure", () => {
      const project = portfolioData.projects[0];
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("description");
      expect(project).toHaveProperty("technologies");
      expect(project).toHaveProperty("github");
      expect(project.technologies.length).toBeGreaterThan(0);
    });

    it("should have all projects with GitHub links", () => {
      portfolioData.projects.forEach((project) => {
        expect(project.github).toBeTruthy();
        expect(project.github).toMatch(/^https:\/\/github\.com\//);
      });
    });
  });

  describe("Education", () => {
    it("should have education data", () => {
      expect(portfolioData.education.length).toBeGreaterThan(0);
    });

    it("should have valid education structure", () => {
      const edu = portfolioData.education[0];
      expect(edu.degree).toBe("Bachelor degree of Information Technology / Software Engineering");
      expect(edu.school).toBe("Damascus University");
      expect(edu.year).toBe("2025");
    });
  });

  describe("Involvement", () => {
    it("should have involvement data", () => {
      expect(portfolioData.involvement.length).toBeGreaterThan(0);
    });

    it("should have valid involvement structure", () => {
      const inv = portfolioData.involvement[0];
      expect(inv).toHaveProperty("title");
      expect(inv).toHaveProperty("organization");
      expect(inv).toHaveProperty("description");
    });
  });
});
