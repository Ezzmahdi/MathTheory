import React from 'react';
import 'katex/dist/katex.min.css'; // Import KaTeX styles
import { InlineMath, BlockMath } from 'react-katex'; // Import KaTeX components

const ChapterTwo = () => {
  return (
    <div className="container mx-auto p-8 font-sans">
      <h1 className="text-4xl font-bold mb-6">Chapter 2: Vector Coordinates, Linear Combinations, and Span</h1>
      <p className="mb-6">
        This chapter takes us deeper into the foundational ideas of <strong>linear algebra</strong>, focusing on how we describe and manipulate vectors using <strong>coordinates</strong>, <strong>basis vectors</strong>, and <strong>spans</strong>. Let’s expand on each concept thoroughly.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">1. Vector Coordinates and Basis Vectors</h3>
      <p className="mb-6">
        A vector like <InlineMath math="[3, -2]" /> represents a point in 2D space. However, this pair of numbers is more than just a label for the point; it encodes a combination of two specific vectors. Let's break this down:
      </p>
      
      <h4 className="text-xl font-medium mb-2">Standard Basis Vectors</h4>
      <p className="mb-6">
        In 2D space, we often use two special vectors:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="\mathbf{i} = [1, 0]" />: A unit vector pointing along the x-axis.</li>
        <li><InlineMath math="\mathbf{j} = [0, 1]" />: A unit vector pointing along the y-axis.</li>
      </ul>
      <p className="mb-6">
        These are called <strong>basis vectors</strong> because:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li>They define the <strong>coordinate system</strong>.</li>
        <li>Any 2D vector can be expressed as a unique combination of <InlineMath math="\mathbf{i}" /> and <InlineMath math="\mathbf{j}" />.</li>
      </ol>

      <h4 className="text-xl font-medium mb-2">Decomposing Vectors</h4>
      <p className="mb-6">
        Given a vector <InlineMath math="[3, -2]" />:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>The x-coordinate 3 scales <InlineMath math="\mathbf{i}" />, stretching it three times its original length.</li>
        <li>The y-coordinate −2 scales <InlineMath math="\mathbf{j}" />, flipping and stretching it twice in the opposite direction.</li>
      </ul>
      <p className="mb-6">
        The result is a <strong>linear combination</strong>:
      </p>
      <BlockMath math="[3, -2] = 3\mathbf{i} + (-2)\mathbf{j}" />
      <p className="mb-6">
        This perspective is crucial: <strong>coordinates describe how much you scale each basis vector to reach your target vector</strong>.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">2. Linear Combination</h3>
      <p className="mb-6">
        A <strong>linear combination</strong> involves two fundamental operations:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li><strong>Scaling</strong> vectors by scalars.</li>
        <li><strong>Adding</strong> scaled vectors.</li>
      </ol>
      <p className="mb-6">
        For example, given vectors <InlineMath math="v=[1,2]" /> and <InlineMath math="w=[3,-1]" />:
      </p>
      <BlockMath math="\text{Linear combination: } a\mathbf{v} + b\mathbf{w} = a[1, 2] + b[3, -1]" />
      <p className="mb-6">
        The scalars <InlineMath math="a" /> and <InlineMath math="b" /> determine how much of each vector contributes to the sum. Depending on their values, the resulting vector can vary widely.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">3. Span of Vectors</h3>
      <p className="mb-6">
        The <strong>span</strong> of a set of vectors is the collection of all possible linear combinations of those vectors. This tells us what "space" we can cover using these vectors.
      </p>

      <h4 className="text-xl font-medium mb-2">Examples in 2D Space</h4>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <strong>Two independent vectors</strong> (e.g., <InlineMath math="[1,0]" /> and <InlineMath math="[0,1]" />):
          <ul className="list-disc pl-8 mb-2">
            <li>Their span covers the entire 2D plane.</li>
            <li>Any vector in 2D space can be reached by scaling and adding these two vectors.</li>
          </ul>
        </li>
        <li>
          <strong>Two dependent vectors</strong> (e.g., <InlineMath math="[1,0]" /> and <InlineMath math="[2,0]" />):
          <ul className="list-disc pl-8 mb-2">
            <li>These vectors lie along the same line.</li>
            <li>Their span is limited to vectors on that line.</li>
          </ul>
        </li>
      </ul>

      <h4 className="text-xl font-medium mb-2">Special Cases</h4>
      <ul className="list-disc pl-8 mb-6">
        <li><strong>Single vector</strong>: Its span is a line through the origin.</li>
        <li><strong>Zero vector</strong>: Its span is just the origin (no other vector can be reached).</li>
      </ul>
      <p className="mb-6">
        The concept of span helps us determine the <strong>dimensionality</strong> of the space covered by a set of vectors.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">4. Changing the Basis</h3>
      <p className="mb-6">
        So far, we’ve used <InlineMath math="\mathbf{i}" /> and <InlineMath math="\mathbf{j}" /> as basis vectors. But what if we choose different basis vectors?
      </p>

      <h4 className="text-xl font-medium mb-2">Custom Basis</h4>
      <p className="mb-6">
        Suppose we pick two new vectors, <InlineMath math="\mathbf{u}" /> and <InlineMath math="\mathbf{v}" />, as the basis:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="\mathbf{u} = [2, 1]" /></li>
        <li><InlineMath math="\mathbf{v} = [1, -1]" /></li>
      </ul>
      <p className="mb-6">
        Now, any vector can be expressed as a combination of <InlineMath math="\mathbf{u}" /> and <InlineMath math="\mathbf{v}" />:
      </p>
      <BlockMath math="[a, b]_{\text{new}} = a\mathbf{u} + b\mathbf{v}" />
      <p className="mb-6">
        This new coordinate system is just as valid as the standard one. However, the specific coordinates of a vector will differ depending on the choice of basis.
      </p>

      <h4 className="text-xl font-medium mb-2">Why Change Basis?</h4>
      <ul className="list-disc pl-8 mb-6">
        <li>In some problems, certain bases simplify calculations.</li>
        <li>For instance, in physics, a rotated basis can align with the direction of forces or motion, making equations easier to solve.</li>
      </ul>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">5. Linear Independence and Dependence</h3>
      <p className="mb-6">
        The concepts of <strong>independence</strong> and <strong>dependence</strong> are vital to understanding spans and bases.
      </p>

      <h4 className="text-xl font-medium mb-2">Linearly Independent Vectors</h4>
      <p className="mb-6">
        A set of vectors is <strong>linearly independent</strong> if no vector in the set can be written as a linear combination of the others.
      </p>
      <p className="mb-6">
        For example, <InlineMath math="\mathbf{i} = [1, 0]" /> and <InlineMath math="\mathbf{j} = [0, 1]" /> are independent because:
      </p>
      <BlockMath math="a\mathbf{i} + b\mathbf{j} = \mathbf{0} \implies a = 0 \text{ and } b = 0" />

      <h4 className="text-xl font-medium mb-2">Linearly Dependent Vectors</h4>
      <p className="mb-6">
        Vectors are <strong>linearly dependent</strong> if at least one vector can be written as a combination of the others.
      </p>
      <p className="mb-6">
        For example:
      </p>
      <BlockMath math="\mathbf{v}_1 = [1, 2], \quad \mathbf{v}_2 = [2, 4]" />
      <p className="mb-6">
        Here, <InlineMath math="\mathbf{v}_2 = 2\mathbf{v}_1" />, so they are dependent, and their span is just a line.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">6. Geometric Interpretation of Span</h3>
      <h4 className="text-xl font-medium mb-2">In 2D</h4>
      <ul className="list-disc pl-8 mb-6">
        <li>Two independent vectors span the entire plane.</li>
        <li>Dependent vectors span a line through the origin.</li>
      </ul>

      <h4 className="text-xl font-medium mb-2">In 3D</h4>
      <ul className="list-disc pl-8 mb-6">
        <li>Two vectors (if independent) span a <strong>plane</strong>.</li>
        <li>Adding a third independent vector spans the entire <strong>3D space</strong>.</li>
      </ul>
      <p className="mb-6">
        Imagine the span of two vectors forming a flat sheet. Adding a third vector, if independent, lifts the span off that sheet, filling the whole 3D space.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">7. Formal Definition of Basis</h3>
      <p className="mb-6">
        A <strong>basis</strong> is a set of vectors that:
      </p>
      <ol className="list-decimal pl-8 mb-6">
        <li>Are <strong>linearly independent</strong>.</li>
        <li><strong>Span the entire space</strong>.</li>
      </ol>
      <p className="mb-6">
        In 2D, the standard basis (<InlineMath math="\mathbf{i}" />, <InlineMath math="\mathbf{j}" />) meets these criteria:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>They are independent.</li>
        <li>Their span covers the entire 2D plane.</li>
      </ul>
      <p className="mb-6">
        Similarly, in 3D, the standard basis consists of:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li><InlineMath math="\mathbf{i} = [1, 0, 0]" /></li>
        <li><InlineMath math="\mathbf{j} = [0, 1, 0]" /></li>
        <li><InlineMath math="\mathbf{k} = [0, 0, 1]" /></li>
      </ul>
      <p className="mb-6">
        These span the entire 3D space.
      </p>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">8. Linear Combinations and Lines</h3>
      <p className="mb-6">
        Where does the term <strong>"linear"</strong> come from?
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>When you fix one scalar and let the other vary, the resulting vectors trace a straight <strong>line</strong>.</li>
        <li>This geometric connection between linear combinations and lines is part of the reason for the term.</li>
      </ul>

      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">Puzzle Recap</h3>
      <p className="mb-6">
        Why is a basis defined as <strong>linearly independent vectors that span the space</strong>?
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Independence ensures no vector is redundant.</li>
        <li>Spanning ensures you can represent every vector in the space.</li>
      </ul>
      <p className="mb-6">
        Both properties guarantee the basis provides the most efficient and complete way to describe the space.
      </p>
    </div>
  );
};

export default ChapterTwo;
