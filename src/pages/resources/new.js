import Layout from "components/Layout";

const ResourceCreate = () => {
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2 ">
            <div className="resource-form">
              <h1 className="title ">Add new resource</h1>
              <form>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        class="input"
                        placeholder="Explain how we can help you"
                      ></input>
                    </div>
                  </div>
                </div>
                <div class="field is-horizontal">
                  <div class="field-label"></div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <button class="button is-primary">Send message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
