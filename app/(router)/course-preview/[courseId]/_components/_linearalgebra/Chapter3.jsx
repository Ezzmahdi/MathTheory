import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ChapterThree = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-4">Chapter 3: Linear Transformations and Matrices — Visualizing Linear Algebra</h1>
      <p className="mb-6">
        Hey everyone! Let’s talk about one of the most fascinating ideas in linear algebra: <strong>linear transformations</strong> and how they connect to <strong>matrices</strong>. If you’re new to this, don’t worry! By the end of this chapter, you’ll see how linear transformations not only simplify matrix operations but also give you a new way to visualize math in action.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">What Are Linear Transformations?</h3>
      <p className="mb-6">
        Let’s break this down.
      </p>
      <p className="mb-6">
        A <strong>transformation</strong> is like a function: it takes something in (a vector) and gives something out (another vector). The fancy term “transformation” hints at how we can visualize these functions. Instead of thinking about numbers or abstract equations, we imagine <strong>movement</strong>—vectors shifting to new positions.
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Input: A vector starting at the origin.</li>
        <li>Output: A new vector somewhere else in the plane.</li>
      </ul>
      <p className="mb-6">
        To understand what’s happening, we could watch how <strong>every possible vector</strong> moves. But rather than tracking all arrows, we simplify:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Imagine each vector as a <strong>point</strong>.</li>
        <li>Watch the grid of points morph as each moves to its new position.</li>
      </ul>
      <p className="mb-6">
        This visualization helps us see the overall effect of a transformation on <strong>2D space</strong>.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">What Makes a Transformation "Linear"?</h3>
      <p className="mb-6">
        Not every transformation is linear. A <strong>linear transformation</strong> follows two simple rules:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li><strong>Lines stay straight</strong> (no curves or bends).</li>
        <li><strong>The origin stays fixed</strong> (no sliding away from [0, 0]).</li>
      </ol>
      <p className="mb-6">
        This means:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Grid lines remain <strong>parallel</strong> and <strong>evenly spaced</strong>.</li>
        <li>For example, <strong>rotation</strong>, <strong>scaling</strong>, and <strong>shearing</strong> transformations are linear.</li>
        <li>But transformations that curve or shift the grid are <strong>not linear</strong>.</li>
      </ul>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">Connecting Matrices to Transformations</h3>
      <p className="mb-6">
        Here’s the cool part: <strong>matrices</strong> give us a numerical way to describe linear transformations.
      </p>
      <p className="mb-6">
        Imagine two key vectors:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="\mathbf{i}" />-hat <InlineMath math="[1, 0]" />, pointing along the x-axis.</li>
        <li><InlineMath math="\mathbf{j}" />-hat <InlineMath math="[0, 1]" />, pointing along the y-axis.</li>
      </ul>
      <p className="mb-6">
        To define a transformation:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li>Apply it to <InlineMath math="\mathbf{i}" />-hat and <InlineMath math="\mathbf{j}" />-hat.</li>
        <li>Record their new positions.</li>
      </ol>
      <p className="mb-6">
        For instance:
      </p>
      <BlockMath math="\mathbf{i} \rightarrow [1, -2], \quad \mathbf{j} \rightarrow [3, 0]" />
      <p className="mb-6">
        This information fits neatly into a <strong>2x2 matrix</strong>:
      </p>
      <BlockMath math="\begin{bmatrix} 1 & 3 \\ -2 & 0 \end{bmatrix}" />

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">Matrix-Vector Multiplication: A Geometric Perspective</h3>
      <p className="mb-6">
        Given a vector <InlineMath math="\mathbf{v}" />:
      </p>
      <BlockMath math="\mathbf{v} = \begin{bmatrix} x \\ y \end{bmatrix}" />
      <p className="mb-6">
        To transform <InlineMath math="\mathbf{v}" />:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li>Multiply its x-coordinate by the first column of the matrix.</li>
        <li>Multiply its y-coordinate by the second column.</li>
        <li>Add the results.</li>
      </ol>
      <BlockMath math="\begin{bmatrix} 1 & 3 \\ -2 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = x \cdot \begin{bmatrix} 1 \\ -2 \end{bmatrix} + y \cdot \begin{bmatrix} 3 \\ 0 \end{bmatrix} = \begin{bmatrix} 1x + 3y \\ -2x + 0y \end{bmatrix}" />

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">Examples of Linear Transformations</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Rotation</strong>: Rotating space by 90° counterclockwise transforms:
          <BlockMath math="\mathbf{i} \rightarrow \begin{bmatrix} 0 \\ 1 \end{bmatrix}, \quad \mathbf{j} \rightarrow \begin{bmatrix} -1 \\ 0 \end{bmatrix}" />
          Resulting matrix:
          <BlockMath math="\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}" />
        </li>
        <li>
          <strong>Shear</strong>: Imagine pulling the top of a square to the right:
          <BlockMath math="\mathbf{i} \rightarrow \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad \mathbf{j} \rightarrow \begin{bmatrix} 1 \\ 1 \end{bmatrix}" />
          Matrix:
          <BlockMath math="\begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}" />
        </li>
        <li>
          <strong>Scaling</strong>: Doubling the size of everything:
          <BlockMath math="\begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}" />
        </li>
      </ul>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">Visualizing Transformations with Matrices</h3>
      <p className="mb-6">
        Every matrix represents a specific way to transform space:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Stretch</strong> it in one direction.</li>
        <li><strong>Compress</strong> it in another.</li>
        <li><strong>Rotate</strong> it around the origin.</li>
        <li><strong>Shear</strong> it diagonally.</li>
      </ul>
      <p className="mb-6">
        When you see a matrix, think of it as a <strong>morphing grid</strong>. Understanding how matrices transform space helps you interpret their effects without memorizing formulas.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">Why Linear Transformations Matter</h3>
      <p className="mb-6">
        Mastering this concept sets you up for deeper topics:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Matrix multiplication</strong>: Combining transformations.</li>
        <li><strong>Determinants</strong>: Measuring space distortion.</li>
        <li><strong>Eigenvalues and eigenvectors</strong>: Finding stable directions.</li>
      </ul>
      <p className="mb-6">
        By thinking of matrices as <strong>transformations</strong>, you’ll see linear algebra as more than just abstract math. It’s a powerful tool for solving real-world problems in physics, computer graphics, and beyond.
      </p>

      <hr className="my-6" />

      <p className="text-xl font-semibold">Next Up:</p>
      <p className="mb-6">
        Matrix multiplication—how combining transformations reveals new insights into the structure of space. Stay tuned!
      </p>
    </div>
  );
};

export default ChapterThree;
