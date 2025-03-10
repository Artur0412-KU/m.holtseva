declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
  
declare module "*.jpeg" {
  const value: string;
  export default value;
}
  
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}