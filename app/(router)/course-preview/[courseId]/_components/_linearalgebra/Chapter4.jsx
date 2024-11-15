import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ChapterFour = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-4">Chapter 4: Matrix Multiplication and Compositions of Transformations</h1>

      <h3 className="text-2xl font-semibold mb-4">Recap: What Are Linear Transformations?</h3>
      <p className="mb-6">A quick reminder about linear transformations:</p>

      <h3 className="text-2xl font-semibold mb-4">Linear Transformations (Concept)</h3>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Definition</strong>: A linear transformation is a function that takes vectors as inputs and outputs new vectors.</li>
        <li><strong>Visual Understanding</strong>: Imagine the 2D plane as a flexible grid that a linear transformation "smooshes" or reshapes while keeping some properties intact:
          <ul className="list-disc pl-8">
            <li>Grid lines remain parallel and evenly spaced.</li>
            <li>The origin (0,0) stays fixed.</li>
          </ul>
        </li>
      </ul>
      <p className="mb-6">Examples include:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Scaling transformations that stretch the grid.</li>
        <li>Rotations around the origin.</li>
        <li>Shears that skew the grid in one direction.</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Basis Vectors and Transformation</h3>
      <p className="mb-6">
        Any vector in the plane can be written as a combination of two basis vectors, <InlineMath math="\mathbf{i}" /> (1, 0) and <InlineMath math="\mathbf{j}" /> (0, 1).
      </p>
      <p className="mb-6">
        For example, a vector <InlineMath math="(x, y)" /> can be expressed as:
      </p>
      <BlockMath math="x \cdot \mathbf{i} + y \cdot \mathbf{j}" />
      <p className="mb-6">
        If you know where the transformation sends <InlineMath math="\mathbf{i}" /> and <InlineMath math="\mathbf{j}" />, you can determine where any other vector will go, since it’s a combination of these basis vectors.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Matrix Representation</h3>
      <p className="mb-6">
        The <strong>columns</strong> of a matrix represent where the basis vectors end up after a transformation:
      </p>
      <BlockMath math="\text{Matrix} = \begin{bmatrix} \text{Where } \mathbf{i} \text{ lands} & \text{Where } \mathbf{j} \text{ lands} \end{bmatrix}" />
      <p className="mb-6">
        For example, if <InlineMath math="\mathbf{i} \to \begin{bmatrix} 2 \\ 1 \end{bmatrix}" /> and <InlineMath math="\mathbf{j} \to \begin{bmatrix} 0 \\ 3 \end{bmatrix}" />, then the matrix is:
      </p>
      <BlockMath math="\begin{bmatrix} 2 & 0 \\ 1 & 3 \end{bmatrix}" />

      <h3 className="text-2xl font-semibold mb-4">Matrix Multiplication as Composition of Transformations</h3>

      <h3 className="text-xl font-semibold mb-4">What Does Matrix Multiplication Mean?</h3>
      <p className="mb-6">
        Matrix multiplication represents the <strong>composition</strong> of applying one transformation after another. For example:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>First rotating a shape, then applying a shear results in a combined transformation that represents both operations.</li>
        <li><strong>Order Matters</strong>: The sequence of transformations affects the outcome. Applying shear first and then rotation produces a different result compared to rotating first and then applying shear.</li>
      </ul>
      <p className="mb-6">
        This order dependence is why <InlineMath math="A \times B \neq B \times A" /> (matrix multiplication is not commutative).
      </p>

      <h3 className="text-xl font-semibold mb-4">How to Multiply Matrices (Numerically)</h3>
      <p className="mb-6">Given two matrices <InlineMath math="A" /> and <InlineMath math="B" />:</p>
      <p className="mb-6">The first column of the result is:</p>
      <BlockMath math="A \times \text{(First Column of } B\text{)}" />
      <p className="mb-6">The second column of the result is:</p>
      <BlockMath math="A \times \text{(Second Column of } B\text{)}" />

      <p className="mb-6">For example, let:</p>
      <BlockMath math="A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}" />

      <h3 className="text-xl font-semibold mb-4">Example Calculation</h3>
      <p className="mb-6">To get the first column:</p>
      <BlockMath math="A \cdot \begin{bmatrix} 5 \\ 7 \end{bmatrix} = \begin{bmatrix} 1 \cdot 5 + 2 \cdot 7 \\ 3 \cdot 5 + 4 \cdot 7 \end{bmatrix} = \begin{bmatrix} 19 \\ 43 \end{bmatrix}" />
      <p className="mb-6">For the second column:</p>
      <BlockMath math="A \cdot \begin{bmatrix} 6 \\ 8 \end{bmatrix} = \begin{bmatrix} 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 6 + 4 \cdot 8 \end{bmatrix} = \begin{bmatrix} 22 \\ 50 \end{bmatrix}" />
      <p className="mb-6">Thus:</p>
      <BlockMath math="A \times B = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}" />

      <h3 className="text-2xl font-semibold mb-4">Associativity of Matrix Multiplication</h3>
      <p className="mb-6">
        The <strong>associative property</strong> states that when multiplying three matrices <InlineMath math="A, B," /> and <InlineMath math="C" />:
      </p>
      <BlockMath math="(A \times B) \times C = A \times (B \times C)" />
      <p className="mb-6">
        This means that the grouping of operations doesn’t matter, only their sequence.
      </p>
      <p className="mb-6">
        Think of applying three transformations in sequence:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="A" /> squishes the grid.</li>
        <li><InlineMath math="B" /> rotates the grid.</li>
        <li><InlineMath math="C" /> shears the grid.</li>
      </ul>
      <p className="mb-6">No matter how you group them, the overall effect is the same.</p>

      <h3 className="text-2xl font-semibold mb-4">Why Understanding Transformations First Helps</h3>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Visual Intuition</strong>: You can see how shapes change under transformations instead of just multiplying numbers.</li>
        <li><strong>Order Sensitivity</strong>: You can easily tell when operations won’t commute by visualizing them.</li>
        <li><strong>Connection to Geometry</strong>: Matrix multiplication reflects real-world actions like scaling, rotating, and skewing.</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Final Takeaways</h3>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Linear Transformations and Matrices</strong>: Matrices encode linear transformations.</li>
        <li><strong>Matrix Multiplication</strong>: Represents applying transformations one after another.</li>
        <li><strong>Order Matters</strong>: The sequence of transformations affects the result.</li>
        <li><strong>Associativity</strong>: The grouping of transformations doesn’t affect the final result.</li>
      </ul>
      <p className="mb-6">
        <strong>Play around!</strong> Try applying different matrices to simple shapes and see how they change to build intuition.
      </p>
    </div>
  );
};

export default ChapterFour;
