import crane from "@/public/images/crane.jpg";
import craneBuilding from "@/public/images/crane-building.jpg";
import craneScaffold from "@/public/images/crane-scaffold.jpg";
import craneTeam from "@/public/images/crane-team.jpg";
import blueprint from "@/public/images/blueprint.jpg";
import blueprintStructure from "@/public/images/blueprint-structure.jpg";
import blueprintTeam from "@/public/images/blueprint-team.jpg";
import grid from "@/public/images/grid.jpg";
import gridLead from "@/public/images/grid-lead.jpg";
import gridPanel from "@/public/images/grid-panel.jpg";
import timber from "@/public/images/timber.jpg";
import rebar from "@/public/images/rebar.jpg";

/**
 * All photography is statically imported so Next.js can generate
 * responsive sizes, modern formats and blur-up placeholders.
 * Swap a file in /public/images (same name) to replace an image site-wide.
 */
export const images = {
  crane,
  craneBuilding,
  craneScaffold,
  craneTeam,
  blueprint,
  blueprintStructure,
  blueprintTeam,
  grid,
  gridLead,
  gridPanel,
  timber,
  rebar,
};

export type ImageKey = keyof typeof images;
