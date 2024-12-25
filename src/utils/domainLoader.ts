import type { DomainData } from '../types';

const CHUNKS_COUNT = 10;

export async function loadAllDomains(): Promise<DomainData[]> {
    const domains: DomainData[] = [];
    
    for (let i = 1; i <= CHUNKS_COUNT; i++) {
        try {
            const chunk = await import(`../data/webs_${i}.json`);
            domains.push(...chunk.default);
        } catch (error) {
            console.error(`Failed to load webs_${i}.json:`, error);
        }
    }
    
    return domains;
}

export async function getDomainByName(domainName: string): Promise<DomainData | undefined> {
    for (let i = 1; i <= CHUNKS_COUNT; i++) {
        try {
            const chunk = await import(`../data/webs_${i}.json`);
            const domain = chunk.default.find((d: DomainData) => d.Domain === domainName);
            if (domain) return domain;
        } catch (error) {
            console.error(`Failed to load webs_${i}.json:`, error);
        }
    }
    return undefined;
}