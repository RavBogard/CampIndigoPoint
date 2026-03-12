import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { createSiteRouter } from "../router";

const renderRoute = (initialEntries = ["/"]) => {
  const router = createSiteRouter(initialEntries);
  return render(<RouterProvider router={router} />);
};

describe("site shell", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });

  afterEach(() => {
    document.body.className = "";
  });

  it("renders the homepage gateway with audience paths and shell CTAs", async () => {
    renderRoute(["/"]);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /a summer camp for lgbtq\+ youth/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByText(/^Families$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^Donors$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/^Staff$/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", { name: /explore family info/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /^register$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /^donate$/i }).length).toBeGreaterThan(0);
  });

  it("keeps register and donate available on a high-intent route", async () => {
    renderRoute(["/donate"]);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /support camp indigo point/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getAllByRole("link", { name: /^register$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /^donate$/i }).length).toBeGreaterThan(0);
  });
});
