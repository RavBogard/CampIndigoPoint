import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import DonateRoute from "../routes/DonateRoute";
import donatePage from "../content/data/donate.json";

describe("Donor Journey", () => {
  it("renders the primary lifeline narrative", () => {
    render(
      <MemoryRouter>
        <DonateRoute />
      </MemoryRouter>
    );
    expect(screen.getByText(donatePage.lifeline.heading)).toBeInTheDocument();
    expect(screen.getByText(/From Black and White to Color/i)).toBeInTheDocument();
  });

  it("renders the impact dashboard metrics", () => {
    render(
      <MemoryRouter>
        <DonateRoute />
      </MemoryRouter>
    );
    expect(screen.getByText("Impact Dashboard")).toBeInTheDocument();
    donatePage.impactMetrics.forEach(metric => {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });
  });

  it("renders the impact tiers", () => {
    render(
      <MemoryRouter>
        <DonateRoute />
      </MemoryRouter>
    );
    expect(screen.getByText(donatePage.impactTiers.heading)).toBeInTheDocument();
    expect(screen.getByText(/\$2,700/)).toBeInTheDocument();
  });

  it("renders the Ashrei Foundation trust handoff", () => {
    render(
      <MemoryRouter>
        <DonateRoute />
      </MemoryRouter>
    );
    expect(screen.getByText(donatePage.fiscalSponsorship.heading)).toBeInTheDocument();
    expect(screen.getByText(/Ashrei Foundation, a 501\(c\)\(3\)/i)).toBeInTheDocument();
  });

  it("renders the specific partner calls to action", () => {
    render(
      <MemoryRouter>
        <DonateRoute />
      </MemoryRouter>
    );
    expect(screen.getByText(donatePage.partnersInJoy.heading)).toBeInTheDocument();
    expect(screen.getAllByText(/Faith Sponsorships/i).length).toBeGreaterThan(0);
  });
});

