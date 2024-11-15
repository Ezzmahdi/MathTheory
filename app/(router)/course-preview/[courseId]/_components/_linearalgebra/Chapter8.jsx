import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ChapterEight = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-6">Chapter 8: Transformations Between Dimensions</h1>

      <h3 className="text-2xl font-semibold mb-4">Quick Recap: What Are Linear Transformations?</h3>
      <p className="mb-6">
        Before diving into transformations between spaces of different dimensions, let’s revisit what we know:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>A <strong>linear transformation</strong> maps vectors from one space to another while preserving two key properties:</li>
        <ol className="list-decimal pl-8">
          <li><strong>Gridlines remain parallel and evenly spaced.</strong></li>
          <li><strong>The origin maps to the origin.</strong></li>
        </ol>
      </ul>
      <p className="mb-6">
        Previously, we explored linear transformations using <strong>square matrices</strong>:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>2x2 matrices</strong> for transformations within 2D space.</li>
        <li><strong>3x3 matrices</strong> for transformations within 3D space.</li>
      </ul>
      <p className="mb-6">
        But what happens if the input and output spaces have <em>different</em> dimensions? That’s where <strong>non-square matrices</strong> come into play.
      </p>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">Introducing Non-Square Matrices</h3>
      <p className="mb-6">
        A <strong>non-square matrix</strong> transforms vectors between spaces of <em>different</em> dimensions. For example:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>A <strong>3x2 matrix</strong> maps vectors from <strong>2D space</strong> to <strong>3D space</strong>.</li>
        <li>A <strong>2x3 matrix</strong> maps vectors from <strong>3D space</strong> to <strong>2D space</strong>.</li>
        <li>A <strong>1x2 matrix</strong> maps vectors from <strong>2D space</strong> to <strong>1D space</strong> (the number line).</li>
      </ul>
      <p className="mb-6">
        But what do these transformations look like, geometrically? Let’s explore with some examples.
      </p>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">Example 1: A 3x2 Matrix (From 2D to 3D)</h3>
      <p className="mb-6">
        Imagine a transformation that takes 2D vectors and maps them into 3D space. Here's how it works:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li><strong>Input space:</strong> 2D, represented by basis vectors <InlineMath math="\mathbf{i}" /> and <InlineMath math="\mathbf{j}" />.</li>
        <li><strong>Output space:</strong> 3D, where each output vector has three coordinates (x, y, z).</li>
      </ol>
      <p className="mb-6">Let’s define the transformation:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <InlineMath math="\mathbf{i}" /> (1 unit in the x-direction of 2D) maps to <InlineMath math="[2, -1, -2]" /> in 3D.
        </li>
        <li>
          <InlineMath math="\mathbf{j}" /> (1 unit in the y-direction of 2D) maps to <InlineMath math="[0, 1, 1]" /> in 3D.
        </li>
      </ul>
      <p className="mb-6">The corresponding matrix is:</p>
      <BlockMath math="\mathbf{A} = \begin{bmatrix} 2 & 0 \\ -1 & 1 \\ -2 & 1 \end{bmatrix}" />

      <h3 className="text-2xl font-semibold mb-4">What Does This Mean Geometrically?</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>The input space (a <strong>2D plane</strong>) gets transformed into a <strong>plane</strong> within <strong>3D space</strong>.</li>
        <li>The plane is defined by all possible linear combinations of the transformed basis vectors.</li>
        <li>This plane slices through the origin in 3D space.</li>
      </ul>
      <p className="mb-6">
        In essence, the 2D input space gets stretched, rotated, or skewed into a new position inside 3D space.
      </p>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">Column Space and Rank</h3>
      <p className="mb-6">
        The <strong>column space</strong> of a matrix tells us about the space spanned by the output:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          For the 3x2 matrix above, the output vectors lie in a <strong>2D plane</strong> in 3D space.
        </li>
        <li>The matrix is <strong>full rank</strong> if its column space has the same dimension as the input space (here, 2D).</li>
      </ul>
      <p className="mb-6">
        <strong>Why is this important?</strong>
      </p>
      <p className="mb-6">
        The rank tells us whether the transformation preserves all the information from the input space:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Full rank:</strong> No loss of dimensionality.</li>
        <li><strong>Not full rank:</strong> Some input directions collapse to zero or merge into others.</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">Example 2: A 2x3 Matrix (From 3D to 2D)</h3>
      <p className="mb-6">
        Now consider a <strong>2x3 matrix</strong> that maps 3D vectors to 2D space. For example:
      </p>
      <BlockMath math="\mathbf{B} = \begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & -1 \end{bmatrix}" />
      <p className="mb-6">
        Here’s what happens:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li><strong>Input space:</strong> 3D, with basis vectors <InlineMath math="\mathbf{i}" />, <InlineMath math="\mathbf{j}" />, and <InlineMath math="\mathbf{k}" />.</li>
        <li><strong>Output space:</strong> 2D, where each output vector has only two coordinates.</li>
      </ol>
      <p className="mb-6">
        The columns of this matrix tell us where each 3D basis vector lands in the 2D output space.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Geometric Interpretation</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>This transformation <strong>flattens</strong> 3D space onto a 2D plane.</li>
        <li>Some information from the input space is lost—specifically, the transformation collapses one entire dimension.</li>
      </ul>
      <p className="mb-6">
        This is why transformations like these often feel “squishy” or restrictive: a 3D world being squeezed into a flat 2D plane.
      </p>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">Example 3: A 1x2 Matrix (From 2D to 1D)</h3>
      <p className="mb-6">
        Lastly, consider a transformation from <strong>2D to 1D</strong>. A typical <InlineMath math="1 \times 2" /> matrix might look like this:
      </p>
      <BlockMath math="\mathbf{C} = \begin{bmatrix} 3 & -2 \end{bmatrix}" />
      <p className="mb-6">Here’s what’s happening:</p>
      <ol className="list-decimal pl-8 mb-6">
        <li><strong>Input space:</strong> 2D, with basis vectors <InlineMath math="\mathbf{i}" /> and <InlineMath math="\mathbf{j}" />.</li>
        <li><strong>Output space:</strong> 1D (the number line).</li>
      </ol>
      <p className="mb-6">
        For any 2D vector <InlineMath math="\mathbf{v} = [x, y]" />, this transformation gives:
      </p>
      <BlockMath math="\mathbf{C} \mathbf{v} = 3x - 2y" />

      <h3 className="text-2xl font-semibold mb-4">Geometric Interpretation</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>The 2D space collapses onto a single line.</li>
        <li>Each input vector maps to a number, representing its position along this line.</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">General Takeaways</h3>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Non-square matrices</strong> allow transformations between spaces of different dimensions.</li>
        <li>The <strong>rows</strong> of a matrix tell you the number of coordinates in the output space.</li>
        <li>The <strong>columns</strong> tell you the number of basis vectors in the input space.</li>
        <li>The transformation always preserves linearity, even when squishing or expanding dimensions.</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">Visualizing and Playing Around</h3>
      <p className="mb-6">
        To fully grasp these ideas:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Visualize:</strong> Imagine how a plane stretches into 3D or a cube flattens into 2D.</li>
        <li><strong>Experiment:</strong> Try different matrices and observe how they transform input vectors.</li>
      </ul>
      <p className="mb-6">
        In the next chapter, we’ll explore how these ideas connect to other key concepts like <strong>dot products</strong>. Until then, keep playing around with these transformations—it’s a fantastic way to build intuition!
      </p>
    </div>
  );
};

export default ChapterEight;
