import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import StaffRoute from "../routes/StaffRoute";
import ContactRoute from "../routes/ContactRoute";
import staffPage from "../content/data/staff.json";
import brandData from "../content/data/brand.json";

const { contactDirectory, pressLinks } = brandData;

describe("Staff Journey", () => {
  it("renders the Magic and Mud narrative", () => {
    render(
      <MemoryRouter>
        <StaffRoute />
      </MemoryRouter>
    );
    expect(screen.getByText(staffPage.theMagic.heading)).toBeInTheDocument();
    expect(screen.getByText(staffPage.theMud.heading)).toBeInTheDocument();
    expect(screen.getByText(staffPage.theCommunity.heading)).toBeInTheDocument();
  });
});

describe("Contact & Press Journey", () => {
  it("renders the explicit contact routing", () => {
    render(
      <MemoryRouter>
        <ContactRoute />
      </MemoryRouter>
    );
    contactDirectory.forEach((contact) => {
      expect(screen.getByText(contact.intent)).toBeInTheDocument();
    });
  });

  it("renders the press links", () => {
    render(
      <MemoryRouter>
        <ContactRoute />
      </MemoryRouter>
    );
    pressLinks.forEach((link) => {
      expect(screen.getByText(new RegExp(link.publication, 'i'))).toBeInTheDocument();
    });
  });
});
