import React from 'react';
import 'katex/dist/katex.min.css'; // Import KaTeX styles
import { InlineMath, BlockMath } from 'react-katex'; // Import KaTeX components

const ChapterOne = () => {
  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-4xl font-bold mb-6">Chapter 1: The Basics of Vectors</h1>

      <h2 className="text-2xl font-semibold mb-4">Introduction: The Foundation of Linear Algebra</h2>
      <blockquote className="italic border-l-4 border-blue-500 pl-4 mb-6">
        "The introduction of numbers as coordinates is an act of violence." —Hermann Weyl
      </blockquote>
      <p className="mb-6">
        Linear algebra begins with a simple yet powerful idea: the vector. Vectors are the building blocks of this
        mathematical framework, much like atoms in physics or code in programming. To understand linear algebra, we must
        first ensure a clear grasp of what vectors are and how they operate. Interestingly, vectors can be viewed in
        three distinct but related ways, depending on the perspective you take:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>The Physics Perspective:</strong> Vectors as arrows in space.
        </li>
        <li>
          <strong>The Computer Science Perspective:</strong> Vectors as ordered lists of numbers.
        </li>
        <li>
          <strong>The Mathematician's Perspective:</strong> Vectors as abstract entities that follow specific rules.
        </li>
      </ul>
      <p className="mb-6">Let’s explore these perspectives and see how they connect.</p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-4">1. Vectors as Arrows (The Physics Perspective)</h3>
      <p className="mb-6">
        From a physicist’s viewpoint, vectors are arrows that represent both <strong>magnitude</strong> (length) and{' '}
        <strong>direction</strong>. Imagine standing at a point in space and pointing an arrow outward. The arrow shows
        a specific direction, and its length tells you how far you’d go if you followed it.
      </p>
      <h4 className="font-medium mb-2">Key Features:</h4>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Length:</strong> How long the arrow is.
        </li>
        <li>
          <strong>Direction:</strong> Where the arrow points.
        </li>
      </ul>
      <p className="mb-6">
        <strong>Important Notes:</strong>
        <br />
        Moving the arrow around doesn’t change its identity, as long as its length and direction stay the same. In a{' '}
        <strong>2D plane</strong>, vectors have two components (horizontal and vertical). In <strong>3D space</strong>,
        vectors have three components (adding depth to horizontal and vertical).
      </p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-4">2. Vectors as Lists (The Computer Science Perspective)</h3>
      <p className="mb-6">
        In computer science, vectors are often represented as <strong>ordered lists of numbers</strong>. Imagine you’re
        analyzing data about houses, where each house has two attributes: square footage and price. Each house can be
        represented as a vector, like this:
      </p>
      <BlockMath math="\text{House 1: } \begin{bmatrix} 1200 \\ 300000 \end{bmatrix}" />
      <p className="mb-6">
        Here, the first number represents square footage, and the second represents price. <strong>Order matters:</strong>{' '}
        Switching the order changes what the numbers mean.
      </p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-4">3. Vectors as Abstract Entities (The Mathematician's Perspective)</h3>
      <p className="mb-6">
        Mathematicians think of vectors as abstract objects that follow two fundamental operations:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Addition:</strong> You can add two vectors.
        </li>
        <li>
          <strong>Scalar Multiplication:</strong> You can multiply a vector by a number (scalar).
        </li>
      </ul>
      <p className="mb-6">
        These operations will be the heart of our journey through linear algebra. For now, let’s stick to a geometric
        view: think of vectors as arrows anchored at the origin (0,0) in a 2D plane or (0,0,0) in 3D space.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">4. Coordinate Systems: Anchoring Vectors</h3>
      <p className="mb-6">
        Vectors live inside coordinate systems. Let’s focus on the <strong>2D coordinate system</strong>:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>The <strong>x-axis</strong> runs horizontally.</li>
        <li>The <strong>y-axis</strong> runs vertically.</li>
        <li>The <strong>origin</strong> (0,0) is where the axes intersect.</li>
      </ul>
      <p className="mb-6">
        A vector’s coordinates tell you how to move from the origin to the tip of the arrow. For example, the vector:
      </p>
      <BlockMath math="\begin{bmatrix} 3 \\ 2 \end{bmatrix}" />
      <p className="mb-6">means:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Move <strong>3 units right</strong> along the x-axis.</li>
        <li>Then move <strong>2 units up</strong> along the y-axis.</li>
      </ul>

      <p className="mb-6">
        In <strong>3D space</strong>, we add the <strong>z-axis</strong> for depth:
      </p>
      <BlockMath math="\begin{bmatrix} 3 \\ 2 \\ 1 \end{bmatrix}" />
      <p className="mb-6">means:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Move <strong>3 units right</strong> (x).</li>
        <li><strong>2 units up</strong> (y).</li>
        <li><strong>1 unit forward</strong> (z).</li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">5. Vector Operations: The Building Blocks</h3>

      <h4 className="font-medium mb-2">A. Vector Addition</h4>
      <p className="mb-6">
        Adding vectors combines their movements. Imagine two vectors:
      </p>
      <ul className="mb-6">
        <li>
          <BlockMath math="u=\begin{bmatrix} 1 \\ 2 \end{bmatrix}"/>
        </li>
        <li>
          <BlockMath math="v=\begin{bmatrix} 3 \\ -1 \end{bmatrix}"/>
        </li>
      </ul>
      <p className="mb-6">
        To add them, align the tail of <InlineMath math='v'/> to the tip of <InlineMath math='u'/>. The resulting vector <InlineMath math='w'/> goes from the tail of <InlineMath math='u'/> to the tip of <InlineMath math='v'/>:
      </p>
      <BlockMath math="w = u + v = \begin{bmatrix} 1 + 3 \\ 2 + (-1) \end{bmatrix} = \begin{bmatrix} 4 \\ 1 \end{bmatrix}" />
      <p className="mb-6">
        Think of this as combining steps: first move along <InlineMath math='u'/>, then move along <InlineMath math='v'/>.
      </p>

      <h4 className="font-medium mb-2">B. Scalar Multiplication</h4>
      <p className="mb-6">
        Multiplying a vector by a scalar (a number) changes its length:
      </p>
      <ul className="mb-6">
        <li><strong>Stretching:</strong> Multiply by a number greater than 1.</li>
        <li><strong>Shrinking:</strong> Multiply by a fraction between 0 and 1.</li>
        <li><strong>Flipping:</strong> Multiply by a negative number to reverse direction.</li>
      </ul>
      <p className="mb-6">
        Example: Multiply <InlineMath math="u = \begin{bmatrix} 1 \\ 2 \end{bmatrix}"/> by 2:
      </p>
      <BlockMath math="2 \cdot u = \begin{bmatrix} 2 \cdot 1 \\ 2 \cdot 2 \end{bmatrix} = \begin{bmatrix} 2 \\ 4 \end{bmatrix}" />
      <p className="mb-6">This doubles the vector’s length.</p>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-4">Visual Exercise:</h3>
      <p>
        Draw two vectors 
        <InlineMath math="u = \begin{bmatrix} 2 \\ 3 \end{bmatrix}" /> and 
        <InlineMath math="v = \begin{bmatrix} -1 \\ 4 \end{bmatrix}" /> on graph paper. Add them together using the tip-to-tail method, and find the resulting vector.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-4">6. Why Learn Vectors?</h3>

      <p className="mb-6"> Understanding vectors bridges abstract mathematics and real-world applications. Whether you're designing animations, analyzing data, or navigating in space, vectors provide a universal language to describe and manipulate systems. </p>

      <p className="mb-6"> In the next chapter, we’ll explore how vectors span spaces and form the building blocks of more complex systems. Buckle up; the journey is just beginning! </p>
    </div>
  );
};

export default ChapterOne;
