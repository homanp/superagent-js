/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Agent {
    name: string;
    type: string;
    llm?: Record<string, unknown>;
    hasMemory?: boolean;
    promptId?: string;
}
