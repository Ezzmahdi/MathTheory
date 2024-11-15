import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const ChapterTwelve = () => {
  return (
    <div className="prose mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Chapter 12: <strong>Cramer’s Rule</strong></h2>

      <hr className="my-4" />

      <p>
        In a previous chapter, I introduced linear systems of equations, focusing on their conceptual framework rather than diving deep into the computational methods used to solve them. Now, we’ll address one specific computational method: <strong>Cramer’s Rule</strong>. While this method isn't the fastest for solving linear systems (Gaussian elimination is generally more efficient), understanding Cramer’s Rule offers profound insights into the connections between <strong>determinants</strong>, <strong>linear transformations</strong>, and <strong>systems of equations</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Why Learn Cramer’s Rule?</h3>
      <ul className="list-disc ml-8">
        <li><strong>Theoretical Depth</strong>: Cramer’s Rule helps consolidate your understanding of linear algebra concepts like determinants and linear systems. It provides a geometric perspective on solving systems of equations.</li>
        <li><strong>Elegance</strong>: The geometric intuition behind Cramer’s Rule is visually and conceptually elegant. The method beautifully links areas (and volumes) with system solutions.</li>
        <li><strong>Conceptual Clarity</strong>: By wrapping your mind around Cramer’s Rule, you strengthen your grasp of the theory even if you won’t use it practically as often.</li>
      </ul>

      <hr className="my-4" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Setting Up the Problem</h3>
      <p>Consider a system of two linear equations with two unknowns:</p>
      <BlockMath math="a_{11}x + a_{12}y = b_1" />
      <BlockMath math="a_{21}x + a_{22}y = b_2" />

      <p>We can represent this system in matrix form:</p>
      <BlockMath math="\mathbf{A} \cdot \mathbf{x} = \mathbf{b}" />

      <p>Where:</p>
      <BlockMath math="\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}, \quad \mathbf{x} = \begin{bmatrix} x \\ y \end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix}" />

      <h3 className="text-xl font-semibold mt-6 mb-2">Geometric Interpretation</h3>
      <p>
        The equation <InlineMath math="\mathbf{A} \cdot \mathbf{x} = \mathbf{b}" /> asks us to find a vector <InlineMath math="\mathbf{x}" /> such that when transformed by <InlineMath math="\mathbf{A}" />, it produces <InlineMath math="\mathbf{b}" />. Geometrically:
      </p>
      <ul className="list-disc ml-8">
        <li><strong>Matrix <InlineMath math="\mathbf{A}" /></strong>: Represents a linear transformation. Transforms the standard basis vectors <InlineMath math="\mathbf{i}" /> and <InlineMath math="\mathbf{j}" /> into new vectors (columns of <InlineMath math="\mathbf{A}" />).</li>
        <li><strong>Vector <InlineMath math="\mathbf{x}" /></strong>: We seek the combination of these transformed basis vectors that lands precisely on <InlineMath math="\mathbf{b}" />.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Understanding Determinants</h3>
      <p>To solve this puzzle, we need determinants. Recall:</p>
      <ul className="list-disc ml-8">
        <li>The <strong>determinant</strong> of a <InlineMath math="2 \times 2" /> matrix <InlineMath math="\mathbf{A}" /> tells us how areas are scaled by the transformation.
          <BlockMath math="\text{det}(\mathbf{A}) = a_{11}a_{22} - a_{12}a_{21}" />
        </li>
        <li>If <InlineMath math="\text{det}(\mathbf{A}) = 0" />, the transformation collapses the plane into a line (or point), and the system either has no solution or infinitely many.</li>
        <li>If <InlineMath math="\text{det}(\mathbf{A}) \neq 0" />, the transformation is invertible, and every output corresponds to exactly one input.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">The Core Idea of Cramer’s Rule</h3>
      <p>Cramer’s Rule relies on the geometric relationship between the <strong>determinant</strong> and the <strong>coordinates</strong> of <InlineMath math="\mathbf{x}" />.</p>
      <p>Let’s break this down step by step:</p>

      <h4 className="text-lg font-semibold mt-4 mb-2">Step 1: Solve for <InlineMath math="x" /></h4>
      <p>To find <InlineMath math="x" />, consider the following:</p>
      <ol className="list-decimal ml-8">
        <li>Replace the <strong>first column</strong> of <InlineMath math="\mathbf{A}" /> with <InlineMath math="\mathbf{b}" />:
          <BlockMath math="\mathbf{A}_x = \begin{bmatrix} b_1 & a_{12} \\ b_2 & a_{22} \end{bmatrix}" />
        </li>
        <li>Compute the determinant of this new matrix:
          <BlockMath math="\text{det}(\mathbf{A}_x) = b_1a_{22} - b_2a_{12}" />
        </li>
        <li>Use the formula for <InlineMath math="x" />:
          <BlockMath math="x = \frac{\text{det}(\mathbf{A}_x)}{\text{det}(\mathbf{A})}" />
        </li>
      </ol>

      <h4 className="text-lg font-semibold mt-4 mb-2">Step 2: Solve for <InlineMath math="y" /></h4>
      <p>To find <InlineMath math="y" />:</p>
      <ol className="list-decimal ml-8">
        <li>Replace the <strong>second column</strong> of <InlineMath math="\mathbf{A}" /> with <InlineMath math="\mathbf{b}" />:
          <BlockMath math="\mathbf{A}_y = \begin{bmatrix} a_{11} & b_1 \\ a_{21} & b_2 \end{bmatrix}" />
        </li>
        <li>Compute the determinant:
          <BlockMath math="\text{det}(\mathbf{A}_y) = a_{11}b_2 - a_{21}b_1" />
        </li>
        <li>Use the formula for <InlineMath math="y" />:
          <BlockMath math="y = \frac{\text{det}(\mathbf{A}_y)}{\text{det}(\mathbf{A})}" />
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-6 mb-2">Why Does This Work?</h3>
      <p>Let’s explore why this makes sense geometrically:</p>
      <ul className="list-disc ml-8">
        <li><strong>Area Interpretation</strong>: The determinant of <InlineMath math="\mathbf{A}_x" /> gives the signed area of a parallelogram formed by <InlineMath math="\mathbf{b}" /> and the second column of <InlineMath math="\mathbf{A}" />.</li>
        <li><strong>Scaling by <InlineMath math="\text{det}(\mathbf{A})" /></strong>: These areas are scaled by the determinant of the original matrix, giving proportionality constants that correspond to the values of <InlineMath math="x" /> and <InlineMath math="y" />.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">Example</h3>
      <p>Solve the system:</p>
      <BlockMath math="2x + 3y = 6" />
      <BlockMath math="x - 4y = 8" />

      <p>Matrix form:</p>
      <BlockMath math="\mathbf{A} = \begin{bmatrix} 2 & 3 \\ 1 & -4 \end{bmatrix}, \quad \mathbf{b} = \begin{bmatrix} 6 \\ 8 \end{bmatrix}" />

      <p><strong>Solution for <InlineMath math="x" /></strong>:</p>
      <BlockMath math="\text{det}(\mathbf{A}_x) = \begin{vmatrix} 6 & 3 \\ 8 & -4 \end{vmatrix} = 6(-4) - 8(3) = -24 - 24 = -48" />
      <BlockMath math="\text{det}(\mathbf{A}) = 2(-4) - 1(3) = -8 - 3 = -11" />
      <BlockMath math="x = \frac{-48}{-11} \approx 4.36" />

      <p><strong>Solution for <InlineMath math="y" /></strong>:</p>
      <BlockMath math="\text{det}(\mathbf{A}_y) = \begin{vmatrix} 2 & 6 \\ 1 & 8 \end{vmatrix} = 2(8) - 1(6) = 16 - 6 = 10" />
      <BlockMath math="y = \frac{10}{-11} \approx -0.91" />

      <p>Thus, the solution is approximately <InlineMath math="(x, y) \approx (4.36, -0.91)" />.</p>
      <h3 className="text-xl font-semibold">Generalization to Higher Dimensions</h3>
      <p>For systems with more variables:</p>
      <BlockMath math="\mathbf{A} \mathbf{x} = \mathbf{b}" />
      <p>
        Each variable <InlineMath math="x_i" /> is computed by replacing the{' '}
        <InlineMath math="i" />-th column of <InlineMath math="\mathbf{A}" /> with{' '}
        <InlineMath math="\mathbf{b}" /> and taking the determinant.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Key Takeaways</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cramer’s Rule</strong> is a theoretical tool rather than a practical one.
          </li>
          <li>
            It links solutions of linear systems with determinants and areas (or volumes in higher dimensions).
          </li>
          <li>
            Understanding this rule reinforces fundamental concepts in linear algebra, offering a beautiful geometric perspective on systems of equations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChapterTwelve;
