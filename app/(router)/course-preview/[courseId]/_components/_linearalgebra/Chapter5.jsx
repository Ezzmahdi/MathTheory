import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ChapterFive = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-4">Chapter 5: Linear Transformations in 3D</h1>

      <h3 className="text-2xl font-semibold mb-4">1. Revisiting Linear Transformations and Matrices</h3>
      <p className="mb-6">
        In earlier chapters, we focused on <strong>linear transformations</strong> in 2D:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Transformations that take 2D vectors and map them to other 2D vectors.</li>
        <li>Each transformation could be represented as a <strong>2×2 matrix</strong>.</li>
      </ul>
      <p className="mb-6">
        Now, we’re stepping into the <strong>3D world</strong>. The core principles remain the same, but the dimension bump introduces a new layer of complexity and utility. Let’s explore!
      </p>

      <h3 className="text-2xl font-semibold mb-4">2. 3D Linear Transformations</h3>
      <h3 className="text-xl font-semibold mb-4">What is a 3D Linear Transformation?</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Definition</strong>: A function that maps 3D vectors (inputs) to other 3D vectors (outputs), while preserving linearity:
          <ul className="list-disc pl-8">
            <li>Grid lines remain parallel and evenly spaced.</li>
            <li>The origin stays fixed.</li>
          </ul>
        </li>
      </ul>
      <p className="mb-6">
        <strong>Visual Representation</strong>: Imagine a <strong>3D grid</strong> in space. A 3D linear transformation reshapes this grid (e.g., rotating, scaling, shearing), while still keeping its structural properties intact.
      </p>

      <h3 className="text-2xl font-semibold mb-4">3. Basis Vectors in 3D</h3>
      <p className="mb-6">In 2D, we worked with two basis vectors:</p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="\mathbf{i}" /> (1, 0)</li>
        <li><InlineMath math="\mathbf{j}" /> (0, 1)</li>
      </ul>
      <p className="mb-6">
        In 3D, there’s a <strong>third basis vector</strong>:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="\mathbf{i}" />: Unit vector in the x-direction (1, 0, 0)</li>
        <li><InlineMath math="\mathbf{j}" />: Unit vector in the y-direction (0, 1, 0)</li>
        <li><InlineMath math="\mathbf{k}" />: Unit vector in the z-direction (0, 0, 1)</li>
      </ul>
      <p className="mb-6">
        A 3D transformation is completely described by showing <strong>where these basis vectors land</strong>.
      </p>

      <h3 className="text-2xl font-semibold mb-4">4. Matrix Representation of 3D Transformations</h3>
      <p className="mb-6">
        Just like in 2D:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>A <strong>3D linear transformation</strong> can be represented by a matrix.</li>
        <li>The <strong>columns of the matrix</strong> tell us where the basis vectors land after the transformation.</li>
      </ul>
      <p className="mb-6">
        For a <strong>3×3 matrix</strong>:
      </p>
      <BlockMath math="\begin{bmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{bmatrix}" />
      <p className="mb-6">
        - The <strong>1st column</strong>: Where <InlineMath math="\mathbf{i}" /> lands.
      </p>
      <p className="mb-6">
        - The <strong>2nd column</strong>: Where <InlineMath math="\mathbf{j}" /> lands.
      </p>
      <p className="mb-6">
        - The <strong>3rd column</strong>: Where <InlineMath math="\mathbf{k}" /> lands.
      </p>

      <h3 className="text-2xl font-semibold mb-4">5. Example: 90-Degree Rotation Around the Y-Axis</h3>
      <p className="mb-6">Let’s walk through a concrete example:</p>
      <p className="mb-6"><strong>Rotate space 90 degrees around the Y-axis.</strong></p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Where does <InlineMath math="\mathbf{i}" /> (1, 0, 0) land?</strong> Rotates into the z-plane:
          <BlockMath math="\begin{bmatrix} 0 \\ 0 \\ -1 \end{bmatrix}" />
        </li>
        <li>
          <strong>Where does <InlineMath math="\mathbf{j}" /> (0, 1, 0) land?</strong> Stays in place:
          <BlockMath math="\begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}" />
        </li>
        <li>
          <strong>Where does <InlineMath math="\mathbf{k}" /> (0, 0, 1) land?</strong> Rotates into the x-plane:
          <BlockMath math="\begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}" />
        </li>
      </ul>
      <p className="mb-6">
        These results form the <strong>columns</strong> of the matrix:
      </p>
      <BlockMath math="\text{Rotation Matrix} = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ -1 & 0 & 0 \end{bmatrix}" />

      <h3 className="text-2xl font-semibold mb-4">6. Applying the Transformation</h3>
      <p className="mb-6">
        To transform a vector <InlineMath math="\mathbf{v} = \begin{bmatrix} x \\ y \\ z \end{bmatrix}" />, multiply the vector by the matrix:
      </p>
      <BlockMath math="\text{New Vector} = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ -1 & 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} z \\ y \\ -x \end{bmatrix}" />

      <h3 className="text-2xl font-semibold mb-4">7. Matrix Multiplication in 3D</h3>
      <h3 className="text-xl font-semibold mb-4">What Does Multiplying Two 3D Matrices Mean?</h3>
      <p className="mb-6">
        Just like in 2D, multiplying two matrices in 3D corresponds to <strong>applying one transformation after another</strong>.
      </p>
      <p className="mb-6"><strong>Example</strong>:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Suppose <InlineMath math="A" /> rotates around the Y-axis and <InlineMath math="B" /> scales the space.</li>
        <li><InlineMath math="A \times B" /> means:
          <ul className="list-disc pl-8">
            <li>First, apply the scaling transformation encoded by <InlineMath math="B" />.</li>
            <li>Then, apply the rotation encoded by <InlineMath math="A" />.</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">Numerical Process</h3>
      <p className="mb-6">
        The multiplication works exactly as in 2D:
      </p>
      <p className="mb-6">
        The <strong>entry</strong> in the <InlineMath math="i^{th}" /> row and <InlineMath math="j^{th}" /> column of the result matrix comes from:
      </p>
      <p className="mb-6"><em>Sum of products from row <InlineMath math="i" /> of the first matrix and column <InlineMath math="j" /> of the second matrix.</em></p>

      <h3 className="text-2xl font-semibold mb-4">8. Why 3D Matrices Matter</h3>
      <p className="mb-6">3D matrix transformations are essential in fields like:</p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Computer Graphics</strong>: To model 3D scenes, simulate camera movements, and apply effects.</li>
        <li><strong>Robotics</strong>: To calculate how robotic arms move and interact with objects.</li>
        <li><strong>Physics Simulations</strong>: For modeling physical transformations and systems.</li>
      </ul>
      <p className="mb-6">
        By breaking complex transformations into smaller, understandable steps (e.g., rotations around specific axes), 3D matrices allow easier and more intuitive manipulation.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Next Step: Determinants</h3>
      <p className="mb-6">
        In the next chapter, we’ll dive into <strong>determinants</strong>, an important tool for understanding whether a transformation stretches, flips, or squashes space—and how much.
      </p>

      <p className="mb-6">
        <strong>Takeaway</strong>: While 3D transformations build upon the familiar 2D concepts, they open doors to real-world applications in graphics, robotics, and physics. Just keep following those basis vectors to see how the entire space moves!
      </p>
    </div>
  );
};

export default ChapterFive;
