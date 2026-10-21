/**
 * Walking Files — Application Catalogue & Release Metadata
 *
 * This data file is the single source of truth for all applications built by
 * Walking Files. Follow the ReleaseStatus flow below when updating or publishing:
 *
 * 1. 'upcoming'       -> Concept / planned application in roadmap.
 * 2. 'in-development' -> Active codebase, building local binaries, no public release published.
 * 3. 'available'      -> Verified public release available. Must have a valid `downloadUrl`.
 *
 * RULE: If `downloadUrl` is not configured or verified, the UI automatically falls
 * back to the honest status message (e.g., "macOS release coming soon") and never
 * renders a broken or hollow download button.
 */

export type ReleaseStatus = 'upcoming' | 'in-development' | 'available';

export interface AppFeature {
  title: string;
  description: string;
  engine: string;
  formats?: string[];
}

export interface AppRelease {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  category: string;
  platforms: string[];
  minimumOS?: string;
  architecture?: string;
  status: ReleaseStatus;
  version?: string;
  releaseDate?: string;
  githubUrl?: string;
  downloadUrl?: string; // Set ONLY when a genuine public release asset is verified!
  packageType?: string;
  fileSize?: string;
  releaseNotesUrl?: string;
  statusMessage?: string;
  isFeatured?: boolean;
  features: AppFeature[];
  requirements: {
    os: string;
    chipset: string;
    ram: string;
    storage: string;
    network: string;
  };
  privacyPledge: {
    offlineOnly: boolean;
    zeroTelemetry: boolean;
    safeOutputs: boolean;
    localProcessing: boolean;
    summary: string;
  };
  installationGuide: {
    liveDev: string[];
    quickLaunch: string[];
  };
}

export const APPS_DATA: AppRelease[] = [
  {
    slug: 'orbit',
    name: 'ORBIT',
    eyebrow: 'MACOS DESKTOP UTILITY',
    tagline: 'Drop it. Transform it. Done.',
    shortDescription:
      'A floating macOS desktop utility that helps users transform and manage files through a minimal, always-on-top interface.',
    fullDescription:
      'ORBIT floats quietly on your screen. Whenever you need to convert an image format, merge multiple photos into a clean PDF, or unpack an archive, simply drag and drop files onto the orb. Everything executes 100% offline using high-performance native Rust engines.',
    icon: '/orbit-icon.svg',
    category: 'Desktop Utility',
    platforms: ['macOS Monterey 12.0+'],
    minimumOS: 'macOS 12.0 (Monterey) or higher',
    architecture: 'Universal Binary (Apple Silicon aarch64 & Intel x86_64)',
    status: 'in-development',
    version: '0.1.0',
    releaseDate: 'Active Development',
    githubUrl: 'https://github.com/chandrakiranmalkapuram/orbit',
    downloadUrl: undefined, // No public GitHub release asset exists yet; honest status rendered
    statusMessage: 'ORBIT for macOS — release coming soon',
    packageType: 'DMG / Universal App',
    isFeatured: true,
    features: [
      {
        title: 'Image Conversion & Optimization',
        description:
          'Seamless one-click conversions between PNG, JPEG, and WebP. Adjust compression quality or convert without losing clarity.',
        engine: 'Native Rust image engine',
        formats: ['PNG', 'JPEG', 'WebP'],
      },
      {
        title: 'Geometric Transforms',
        description:
          'Rotate 90° clockwise/counter-clockwise, flip horizontally or vertically, crop to a perfect square, or convert to monochrome.',
        engine: 'Fast pixel transformation pipeline',
      },
      {
        title: 'Metadata & Privacy Cleaning',
        description:
          'Strip sensitive EXIF data, GPS coordinates, and camera markers before sharing photos publicly or embedding in documents.',
        engine: 'In-place EXIF stripper',
      },
      {
        title: 'Multi-Page PDF Synthesis',
        description:
          'Combine multiple photos into a single, high-resolution multi-page PDF document in custom drag-and-drop order.',
        engine: 'Native vector PDF synthesis engine',
        formats: ['JPEG', 'PNG -> PDF'],
      },
      {
        title: 'PDF Page Splitter & OCR Text Extraction',
        description:
          'Extract individual pages as high-resolution images or pull plain readable text from document structures directly.',
        engine: 'PDF rasterization & text parser',
      },
      {
        title: 'Safe Archive Peek & Unpack',
        description:
          'Inspect archive contents safely before extraction. Unzip archives directly alongside the source without overwriting originals.',
        engine: 'Safe zip extractor with collision guards',
        formats: ['ZIP'],
      },
    ],
    requirements: {
      os: 'macOS Monterey (12.0) or later',
      chipset: 'Apple Silicon (M1/M2/M3/M4) or Intel 64-bit CPU',
      ram: '512 MB available RAM',
      storage: 'Less than 45 MB disk space',
      network: 'Zero network connectivity required (works completely offline)',
    },
    privacyPledge: {
      offlineOnly: true,
      zeroTelemetry: true,
      safeOutputs: true,
      localProcessing: true,
      summary:
        'ORBIT contains zero analytics, zero external API endpoints, and zero cloud synchronization. All operations happen in local system memory and disk.',
    },
    installationGuide: {
      liveDev: [
        'git clone https://github.com/chandrakiranmalkapuram/orbit.git',
        'cd orbit',
        'npm install',
        'npm run tauri dev',
      ],
      quickLaunch: [
        '# If built locally:',
        'open "src-tauri/target/release/bundle/macos/ORBIT.app"',
      ],
    },
  },
  {
    slug: 'folio',
    name: 'FOLIO',
    eyebrow: 'UPCOMING CONCEPT',
    tagline: 'Quiet markdown workspace for focused thought.',
    shortDescription:
      'A distraction-free, local-only document reader and minimal note composer for macOS, currently in exploratory concept.',
    fullDescription:
      'FOLIO is planned as the second utility from Walking Files. Designed for writers and developers who want a single-pane, typography-first markdown workspace with zero sync lock-in.',
    icon: '/favicon.svg',
    category: 'Productivity & Writing',
    platforms: ['macOS'],
    status: 'upcoming',
    statusMessage: 'In Studio Conception — Not yet released',
    isFeatured: false,
    features: [
      {
        title: 'Typography First',
        description:
          'Carefully calibrated optical sizing, margins, and line heights inspired by classic Indian and Swiss typesetting.',
        engine: 'Native TextKit renderer',
      },
      {
        title: 'Folder-as-a-Library',
        description:
          'Points directly to any local directory of .md files. No proprietary databases or hidden exports.',
        engine: 'Direct filesystem watcher',
      },
    ],
    requirements: {
      os: 'macOS Monterey or higher',
      chipset: 'Universal Binary',
      ram: '256 MB',
      storage: 'Under 30 MB',
      network: 'Completely offline',
    },
    privacyPledge: {
      offlineOnly: true,
      zeroTelemetry: true,
      safeOutputs: true,
      localProcessing: true,
      summary:
        'Local markdown files remain standard plain text on your filesystem. Zero cloud dependencies.',
    },
    installationGuide: {
      liveDev: ['# Development roadmap scheduled following ORBIT v1.0 release.'],
      quickLaunch: [],
    },
  },
];

export const STUDIO_METADATA = {
  name: 'Walking Files',
  brandName: 'Walking Files',
  tagline: 'Thoughtfully made tools. Ready for your everyday.',
  founder: 'Chandra Kiran Malkapuram',
  founderTitle: 'Independent Software Engineer',
  portfolioUrl: 'https://chandrakiran.dev',
  githubProfile: 'https://github.com/chandrakiranmalkapuram',
  contactEmail: 'chandrakiranmalkapuram2000@gmail.com',
  githubOrg: 'https://github.com/chandrakiranmalkapuram',
  year: '2026',
  principles: [
    {
      number: '01',
      title: 'Offline & Local-First',
      summary:
        'Every tool functions entirely on your computer. You can disconnect your Wi-Fi and our software continues working without interruption.',
    },
    {
      number: '02',
      title: 'Respectful Interfaces',
      summary:
        'Utilities should stay out of your peripheral vision until you need them. No aggressive notifications, upsell banners, or modal interruptions.',
    },
    {
      number: '03',
      title: 'Precision Craftsmanship',
      summary:
        'Built with native Rust engines and minimal dependencies to provide instantaneous startup, modest memory consumption, and zero bloat.',
    },
    {
      number: '04',
      title: 'Heritage Meets Modernity',
      summary:
        'Rooted in the timeless symmetry, warmth, and balance of Indian architectural craft, shaped for the contemporary software ecosystem.',
    },
  ],
};
