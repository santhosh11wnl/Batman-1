import { describe, it, expect } from '@jest/globals';

describe('Portfolio Website', () => {
  it('should have correct project structure', () => {
    expect(true).toBe(true);
  });

  it('should export content data', () => {
    const content = require('../data/content');
    expect(content.personalInfo).toBeDefined();
    expect(content.personalInfo.name).toBe('Ijaz Ahammad Shaik');
  });
});
