import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ChapterSeven = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-6">Chapter 7: Understanding Linear Systems and Transformations in Linear Algebra</h1>
      <p className="mb-6">
        Linear algebra is all about understanding how systems of equations and transformations shape and interact with space. Let’s explore these concepts step by step, with geometric insights and practical tools.
      </p>
      
      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">1. Linear Systems of Equations</h3>
      <p className="mb-6">
        A <strong>linear system of equations</strong> represents relationships between variables. For example:
      </p>
      <BlockMath math="3x + 2y = 5 \\ x - y = 1" />
      <p className="mb-6">This system can be written in <strong>matrix form</strong>:</p>
      <BlockMath math="A \mathbf{x} = \mathbf{v}" />

      <p className="mb-6">Where:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <InlineMath math="A" /> is the <strong>coefficient matrix</strong>:
          <BlockMath math="A = \begin{bmatrix} 3 & 2 \\ 1 & -1 \end{bmatrix}" />
        </li>
        <li>
          <InlineMath math="\mathbf{x}" /> is the <strong>unknown vector</strong>:
          <BlockMath math="\mathbf{x} = \begin{bmatrix} x \\ y \end{bmatrix}" />
        </li>
        <li>
          <InlineMath math="\mathbf{v}" /> is the <strong>result vector</strong>:
          <BlockMath math="\mathbf{v} = \begin{bmatrix} 5 \\ 1 \end{bmatrix}" />
        </li>
      </ul>

      <p className="mb-6">The goal? Find the vector <InlineMath math="\mathbf{x}" /> that satisfies this transformation.</p>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">2. Matrix Transformations: A Geometric View</h3>
      <p className="mb-6">
        The matrix <InlineMath math="A" /> represents a <strong>linear transformation</strong>:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>It might <strong>rotate</strong>, <strong>stretch</strong>, or <strong>squish</strong> the space.</li>
      </ul>
      <p className="mb-6">
        Solving <InlineMath math="A \mathbf{x} = \mathbf{v}" /> asks:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Which vector <InlineMath math="\mathbf{x}" />, when transformed by <InlineMath math="A" />, lands on <InlineMath math="\mathbf{v}" />?</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">3. When Can We Solve <InlineMath math="A \mathbf{x} = \mathbf{v}" />?</h3>
      <p className="mb-6">Here’s where the <strong>determinant</strong> and matrix properties come in:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Determinant ≠ 0</strong>: The transformation <InlineMath math="A" /> doesn’t squish space too much. Every vector <InlineMath math="\mathbf{v}" /> has a unique solution <InlineMath math="\mathbf{x}" />. The transformation is reversible, and the inverse matrix <InlineMath math="A^{-1}" /> exists:
          <BlockMath math="\mathbf{x} = A^{-1} \mathbf{v}" />
        </li>
        <li>
          <strong>Determinant = 0</strong>: The transformation squishes space, meaning some dimensions collapse. In this case:
          <ul className="list-disc pl-8">
            <li>Some vectors <InlineMath math="\mathbf{v}" /> might not have a solution (if they fall outside the transformed space).</li>
            <li>Others might have <strong>infinitely many solutions</strong> if multiple vectors <InlineMath math="\mathbf{x}" /> map to the same <InlineMath math="\mathbf{v}" />.</li>
          </ul>
        </li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">4. Column Space and Rank</h3>
      <p className="mb-6">
        The <strong>column space</strong> of <InlineMath math="A" /> is the set of all possible outputs of the transformation:
      </p>
      <p className="mb-6">Think of it as the "territory" <InlineMath math="A" /> can cover after transforming vectors.</p>

      <p className="mb-6">
        The <strong>rank</strong> of a matrix tells us the size of this column space:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Full Rank</strong>: If <InlineMath math="A" /> has rank 2 (in 2D) or rank 3 (in 3D), it spans the entire space. Every <InlineMath math="\mathbf{v}" /> has a solution.</li>
        <li><strong>Reduced Rank</strong>: If rank is less than the space dimension (e.g., rank 1 in 2D), the column space is smaller (like a line in 2D). Only certain <InlineMath math="\mathbf{v}" /> vectors can be reached.</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">5. Null Space: The "Lost" Dimension</h3>
      <p className="mb-6">
        The <strong>null space</strong> is the set of vectors <InlineMath math="\mathbf{x}" /> that get squished to <InlineMath math="\mathbf{0}" />:
      </p>
      <BlockMath math="A \mathbf{x} = \mathbf{0}" />
      <p className="mb-6">
        These vectors are "invisible" in the output—they don’t change <InlineMath math="\mathbf{v}" />.
      </p>
      <p className="mb-6">
        <strong>Geometric Insight</strong>: If the null space contains vectors other than <InlineMath math="\mathbf{0}" />, it means multiple solutions exist for certain systems.
      </p>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">6. Full Picture: Determinants, Solutions, and Geometry</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Determinant ≠ 0</strong> (Full Rank):
          <ul className="list-disc pl-8">
            <li>The transformation preserves space.</li>
            <li>Every <InlineMath math="\mathbf{v}" /> in the space has a unique solution <InlineMath math="\mathbf{x}" />.</li>
            <li>No vectors in the null space (except <InlineMath math="\mathbf{0}" />).</li>
          </ul>
        </li>
        <li>
          <strong>Determinant = 0</strong> (Reduced Rank):
          <ul className="list-disc pl-8">
            <li>The transformation collapses some dimensions (e.g., a 3D space might flatten into a plane, a 2D space might collapse into a line).</li>
            <li>Solutions may be:
              <ul className="list-disc pl-8">
                <li><strong>None</strong> (if <InlineMath math="\mathbf{v}" /> isn’t in the column space).</li>
                <li><strong>Infinite</strong> (if multiple <InlineMath math="\mathbf{x}" /> vectors map to the same <InlineMath math="\mathbf{v}" />).</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
      <p className="mb-6">
        Linear algebra is about understanding transformations:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Column space</strong> shows what’s possible.</li>
        <li><strong>Null space</strong> reveals what’s lost.</li>
        <li>The <strong>determinant</strong> and <strong>rank</strong> guide us on whether solutions exist and whether they’re unique.</li>
      </ul>
      <p className="mb-6">
        With these tools, you can decode systems of equations and transformations, bridging algebra with geometry in powerful ways.
      </p>
    </div>
  );
};

export default ChapterSeven;
