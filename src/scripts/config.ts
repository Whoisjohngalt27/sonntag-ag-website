export interface DownloaderConfig {
  // Authentication
  email: string;
  password: string;
  
  // Browser settings
  headless: boolean;
  slowMo: number;
  viewport: {
    width: number;
    height: number;
  };
  
  // Download settings
  downloadPath: string;
  categories: string[];
  maxBlocksPerCategory: number;
  
  // Selectors for different UI elements
  selectors: {
    loginForm: string;
    emailInput: string;
    passwordInput: string;
    loginButton: string;
    categoryNav: string;
    blockItem: string;
    codeHtml: string;
    codeCss: string;
    codeJs: string;
    blockDescription: string;
    blockTags: string;
  };
  
  // URLs
  baseUrl: string;
  marketingUrl: string;
  
  // Timeouts
  timeouts: {
    login: number;
    navigation: number;
    elementWait: number;
  };
}

export const defaultConfig: DownloaderConfig = {
  // Authentication
  email: 'mz@dealteam-six.com',
  password: 'Q$kG3j9T_JCxYG*|',
  
  // Browser settings
  headless: false, // Set to true for production
  slowMo: 1000,
  viewport: {
    width: 1920,
    height: 1080,
  },
  
  // Download settings
  downloadPath: 'src/components/ui-blocks',
  categories: ['marketing', 'components', 'forms', 'navigation', 'layouts'],
  maxBlocksPerCategory: 50,
  
  // Selectors for different UI elements
  selectors: {
    loginForm: '[data-testid="login-form"]',
    emailInput: 'input[type="email"]',
    passwordInput: 'input[type="password"]',
    loginButton: 'button[type="submit"]',
    categoryNav: '[data-testid="category-nav"] a, .category-nav a, nav a[href*="ui-blocks"]',
    blockItem: '[data-testid="block-item"], .block-item, .ui-block, [class*="block"]',
    codeHtml: '[data-testid="code-html"], .code-html, pre[class*="html"], code[class*="html"]',
    codeCss: '[data-testid="code-css"], .code-css, pre[class*="css"], code[class*="css"]',
    codeJs: '[data-testid="code-js"], .code-js, pre[class*="js"], code[class*="js"]',
    blockDescription: '[data-testid="block-description"], .block-description, .description, p',
    blockTags: '[data-testid="block-tags"] .tag, .block-tags .tag, .tags .tag',
  },
  
  // URLs
  baseUrl: 'https://tailwindcss.com/plus',
  marketingUrl: 'https://tailwindcss.com/plus/ui-blocks/marketing',
  
  // Timeouts
  timeouts: {
    login: 15000,
    navigation: 10000,
    elementWait: 5000,
  },
};

export function loadConfig(): DownloaderConfig {
  try {
    // Try to load from environment variables
    const envConfig: Partial<DownloaderConfig> = {
      email: process.env.TAILWIND_EMAIL || defaultConfig.email,
      password: process.env.TAILWIND_PASSWORD || defaultConfig.password,
      headless: process.env.HEADLESS === 'true' || defaultConfig.headless,
      slowMo: parseInt(process.env.SLOW_MO || '1000'),
    };
    
    return { ...defaultConfig, ...envConfig };
  } catch (error) {
    console.warn('⚠️ Could not load custom config, using defaults');
    return defaultConfig;
  }
}
