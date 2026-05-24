export interface CampaignPackage {
  title: string;
  type: string;
  audience: string;
  clarification?: string;
  creativeConcept?: string;
  visualPoster?: string;
  broadcastCopy?: string;
  socialCaption?: string;
  timelineTeam?: string;
  budgeting?: string;
  rundown?: string;
  mcCueCard?: string;
  isMinim: boolean;
  isInappropriate: boolean;
  colors: string[];
}

export function parseCampaignOutput(
  rawText: string,
  title: string = "",
  type: string = "",
  audience: string = ""
): CampaignPackage {
  // Normalize markdown newlines for parsing stability
  const normalizedText = rawText.replace(/\r\n/g, "\n");
  const sections = normalizedText.split(/^##\s+/m);

  let clarification = "";
  let creativeConcept = "";
  let visualPoster = "";
  let broadcastCopy = "";
  let socialCaption = "";
  let timelineTeam = "";
  let budgeting = "";
  let rundown = "";
  let mcCueCard = "";
  let isMinim = false;
  let isInappropriate = false;

  for (const sect of sections) {
    if (!sect.trim()) continue;
    
    const lines = sect.split("\n");
    const headerLine = lines[0].trim();
    const content = lines.slice(1).join("\n").trim();
    
    const headerUpper = headerLine.toUpperCase();

    if (headerUpper.includes("KLARIFIKASI")) {
      clarification = content;
      isMinim = true;
    } else if (headerUpper.includes("KONSEP KREATIF") || headerUpper.includes("TEMA")) {
      creativeConcept = content;
    } else if (headerUpper.includes("GAYA VISUAL") || headerUpper.includes("POSTER")) {
      visualPoster = content;
    } else if (headerUpper.includes("COPYWRITING SIARAN") || headerUpper.includes("SIARAN")) {
      broadcastCopy = content;
    } else if (headerUpper.includes("CAPTION") || headerUpper.includes("MEDIA SOSIAL")) {
      socialCaption = content;
    } else if (headerUpper.includes("TIMELINE") || headerUpper.includes("PEMBAGIAN TIM") || headerUpper.includes("SDM")) {
      timelineTeam = content;
    } else if (headerUpper.includes("ANGGARAN") || headerUpper.includes("BUDGETING") || headerUpper.includes("BUDGET")) {
      budgeting = content;
    } else if (headerUpper.includes("RUNDOWN")) {
      rundown = content;
    } else if (headerUpper.includes("CUE CARD") || headerUpper.includes("MC")) {
      mcCueCard = content;
    } else if (
      headerUpper.includes("ERROR") || 
      headerUpper.includes("KONTEN TIDAK PANTAS") || 
      headerUpper.includes("TIDAK PANTAS")
    ) {
      isInappropriate = true;
    }
  }

  // Find all hex color codes in the text to present a live color palette
  const hexHexRegex = /#([a-fA-F0-9]{6})/g;
  const foundColors: string[] = [];
  let match;
  while ((match = hexHexRegex.exec(rawText)) !== null) {
    const col = match[0].toUpperCase();
    if (!foundColors.includes(col)) {
      foundColors.push(col);
    }
  }

  return {
    title,
    type,
    audience,
    clarification,
    creativeConcept,
    visualPoster,
    broadcastCopy,
    socialCaption,
    timelineTeam,
    budgeting,
    rundown,
    mcCueCard,
    isMinim: isMinim || rawText.includes("KLARIFIKASI INPUT"),
    isInappropriate: isInappropriate || rawText.includes("ERROR: KONTEN TIDAK PANTAS"),
    colors: foundColors.slice(0, 5), // Limit to top 5 detected colors
  };
}
