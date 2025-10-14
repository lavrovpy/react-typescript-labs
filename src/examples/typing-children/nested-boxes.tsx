import type { PropsWithChildren, ReactNode } from 'react'

type BoxProps = PropsWithChildren<{ width: number; height: number; children: ReactNode }>;

const Box = ({ children, width, height }: BoxProps) => {
  return (
    <section className="m-4" style={{ padding: '1em', border: '5px solid purple', width: width, height: height }}>
      {children}
    </section>
  );
};

export const NestedBoxes = () => {
  return (
    <main className="m-8">
      <Box width={510} height={700}>
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box width={150} height={200}>
          <h2>Another React component with one child.</h2>
        </Box>
        <Box width={150} height={200}>
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
    </main>
  );
};
